<script lang="ts">
	import Card from '../UI/Card.svelte';
	import SkeletonAnimation from '../UI/SkeletonAnimation.svelte';
	import {
		latitude,
		longitude,
		searchedOnce,
	} from '$lib/stores/search-location.store';
	import { isDesktop } from '$lib/stores/screen-detection.store';
	import CurrentWeather from './CurrentWeather.svelte';
	import ForecastHourly from './ForecastHourly.svelte';
	import ForecastNextDays from './ForecastNextDays.svelte';
	import ApiService from '$lib/utils/api-service';
	import { delayPromise } from '$lib/utils/delay-promise';
	import Error from '../Error.svelte';
	import type { ForecastApiResponse } from '$lib/models';

	export let initialForecast: ForecastApiResponse | null = null;

</script>

{#await !$searchedOnce && initialForecast ? initialForecast : delayPromise(ApiService.getForecast($latitude, $longitude))}
	<h6><SkeletonAnimation width="200px" height="1.5rem" /></h6>

	{#if $isDesktop}
		<SkeletonAnimation width="100%" height="325px" withElevation />
	{:else}
		<SkeletonAnimation width="100%" height="202px" withElevation />
		<h6><SkeletonAnimation width="200px" height="1.5rem" /></h6>
		<SkeletonAnimation width="100%" height="145px" withElevation />
	{/if}

	<h6><SkeletonAnimation width="200px" height="1.5rem" /></h6>
	<div class="forecast__loading-week">
		{#each new Array(7).fill(null) as item}
			<Card size="small" isLoading={true} />
		{/each}
	</div>
{:then { current, daily, hourly }}
	<h6 class="forecast__title">Today</h6>

	{#if $isDesktop}
		<Card size="large">
			<CurrentWeather forecastCurrentCard={current} />
			<ForecastHourly hourlyForecastCards={hourly} />
		</Card>
	{:else}
		<Card size="large">
			<CurrentWeather forecastCurrentCard={current} />
		</Card>
		<h6>Hourly Forecast</h6>
		<Card size="large" isCompact>
			<ForecastHourly hourlyForecastCards={hourly} />
		</Card>
	{/if}
	<h6>Next 7 Days</h6>
	<ForecastNextDays weekForecastCards={daily} />
{:catch error}
	<Error status={error.status} size="small" />
{/await}

<style>
	.forecast__title {
		margin-top: var(--spacing-lg);
	}

	@media (max-width: 768px) {
		.forecast__title {
			margin-top: var(--spacing-sm);
		}
	}

	.forecast__loading-week {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-md);
		overflow-x: auto;
	}
</style>
