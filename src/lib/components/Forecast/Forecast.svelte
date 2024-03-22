<script lang="ts">
	import {
		currentWeather,
		hourlyForecastCards,
		isLoading,
		weekForecastCards
	} from '$lib/stores/forecast.store';
	import { isDesktop } from '$lib/stores/screen-detection.store';
	import Card from '../UI/Card.svelte';
	import SkeletonAnimation from '../UI/SkeletonAnimation.svelte';
	import CurrentWeather from './CurrentWeather.svelte';
	import ForecastHourly from './ForecastHourly.svelte';
	import ForecastNextDays from './ForecastNextDays.svelte';
</script>

{#if $isLoading || $currentWeather === null}
	<h6><SkeletonAnimation width="200px" height="2rem" /></h6>
	<Card size="large" isLoading={true} />

	<h6><SkeletonAnimation width="200px" height="2rem" /></h6>
	<SkeletonAnimation width="100%" height="116px" withElevation />

	<h6><SkeletonAnimation width="200px" height="2rem" /></h6>
	<div class="forecast__loading-week">
		{#each new Array(7).fill(null) as item}
			<Card size="small" isLoading={true} />
		{/each}
	</div>
{:else}
	<h6 class="forecast__title">Today</h6>

	{#if $isDesktop}
		<Card size="large">
			<CurrentWeather forecastCurrentCard={$currentWeather} />
			<ForecastHourly hourlyForecastCards={$hourlyForecastCards} />
		</Card>
	{:else}
		<Card size="large">
			<CurrentWeather forecastCurrentCard={$currentWeather} />
		</Card>
		<h6>Hourly Forecast</h6>
		<Card size="large" isCompact>
			<ForecastHourly hourlyForecastCards={$hourlyForecastCards} />
		</Card>
	{/if}

	<h6>Next 7 Days</h6>

	<ForecastNextDays weekForecastCards={$weekForecastCards} />
{/if}

<style>
	.forecast__title {
		margin-top: 0px;
	}

	@media (min-width: 768px) {
		.forecast__title {
			margin-top: var(--spacing-lg);
		}
	}
	.forecast__loading-week {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-md);
		overflow-x: auto;
	}
</style>
