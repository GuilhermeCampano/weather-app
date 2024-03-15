<script lang="ts">
	import { isLoading, weekForecastCards } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
	import SkeletonAnimation from './SkeletonAnimation.svelte';

	import {Localization} from '$lib/utils/localization';

	function formatDayOfWeek(dayNumber: number) {
		return dayNumber === 0 ? 'Today' : Localization.formatDayOfWeek(dayNumber.toString());
	}
</script>

{#if $isLoading}
	<h6><SkeletonAnimation width="200px" height="2rem" /></h6>
	<div class="forecast">
		{#each new Array(7).fill(null) as item}
			<Card size="small" isLoading={true}/>
		{/each}
	</div>
{/if}

{#if !$isLoading && $weekForecastCards.length}
	<h6>7 Day Forecast</h6>
	<div class="forecast">
		{#each $weekForecastCards as dayForecastCard, i}
			<Card size="small" isLoading={$isLoading}>
				<div class="forecast__text"></div>
				{formatDayOfWeek(dayForecastCard.dayOfWeek)}
				<WeatherIcon iconDetails={dayForecastCard.weatherCode} size="large" />
				<div class="forecast__text">{dayForecastCard.temperature}°</div>
			</Card>
		{/each}
	</div>
{/if}

<style>
	.forecast {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		overflow-x: auto;
	}

	.forecast__text {
		font-size: 1.5rem;
		font-weight: 400;
	}
</style>
