<script lang="ts">
	import { isLoading, weekForecastCards } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
</script>

{#if !$isLoading && $weekForecastCards.length}
	<p>7 Day Forecast</p>
	<div class="forecast">
		{#each $weekForecastCards as dayForecastCard, i}
			<Card size="small">
				<div class="forecast__card">
					<div class="forecast__text"></div>{dayForecastCard.dayOfWeek}
					<WeatherIcon iconDetails={dayForecastCard.weatherCode} size="large"/>
					<div class="forecast__text">{dayForecastCard.temperature}°</div>
				</div>
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

	.forecast__card {
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: 80px;
		gap: 0 0.5rem;
	}

	.forecast__text {
		font-size: 1.5rem;
		font-weight: 400;
	}
</style>
