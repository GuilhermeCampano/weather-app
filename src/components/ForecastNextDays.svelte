<script lang="ts">
	import { isLoading, weekForecast } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
</script>

{#if !$isLoading && $weekForecast.length}
	<p>7 Day Forecast</p>
	<div class="forecast">
		{#each $weekForecast as forecastCard, i}
			<Card size="small">
				<div class="forecast__card">
					<div class="forecast__text"></div>{forecastCard.dayOfWeek}
					<WeatherIcon iconDetails={forecastCard.weatherCode} size="large"/>
					<div class="forecast__text">{forecastCard.temperature}°</div>
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
