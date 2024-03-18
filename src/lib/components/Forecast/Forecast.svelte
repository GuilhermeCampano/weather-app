<script lang="ts">
	import { currentWeather, hourlyForecastCards, isLoading, weekForecastCards } from '$lib/stores/forecast.store';
	import { isMobile } from '$lib/stores/screen-detection.store';
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
	<h6>Today</h6>

	<Card size="large">
		<CurrentWeather forecastCurrentCard={$currentWeather} />
	</Card>

	<h6>Hourly Forecast</h6>

	<Card size="large" isCompact>
		<ForecastHourly hourlyForecastCards={$hourlyForecastCards} />
	</Card>

	<h6>Next 7 Days</h6>

	<ForecastNextDays weekForecastCards={$weekForecastCards} />
{/if}

<!-- {#if $isMobile}
	<CurrentWeather />
	<ForecastHourly />
{:else}
	<CurrentWeather>
		<ForecastHourly />
	</CurrentWeather>
{/if}
<ForecastNextDays /> -->

<style>
	.forecast__loading-week {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		overflow-x: auto;
	}
</style>
