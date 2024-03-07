<script lang="ts">
	import { isLoading, weekForecastCards } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
</script>

{#if !$isLoading && $weekForecastCards.length}
	<h6>7 Day Forecast</h6>
	<div class="forecast">
		{#each $weekForecastCards as dayForecastCard, i}
			<Card size="small">
					<div class="forecast__text"></div>{dayForecastCard.dayOfWeek}
					<WeatherIcon iconDetails={dayForecastCard.weatherCode} size="large"/>
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
