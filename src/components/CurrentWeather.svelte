<script lang="ts">
	import { isLoading, currentWeather } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
</script>

<p>Today</p>
<Card size="large">
	{#if $isLoading}
		<p>Loading...</p>
	{/if}

	{#if !$isLoading && $currentWeather}
		<div>
			<h5 class="my-1">Now</h5>
			<div class="weather__temperature">
				{$currentWeather.temperature}°
				<span
					class="weather__icon"
					class:weather__icon--two-digits={$currentWeather.temperature > 9}
					><WeatherIcon iconDetails={$currentWeather.weatherCode} size="large" /></span
				>
			</div>
			<div class="weather__high-low">
				<div>High: {$currentWeather.temperatureMax}°</div>
				<div>Low: {$currentWeather.temperatureMin}°</div>
			</div>
		</div>
		<div class="text-right">
			<strong class="weather__code-text"
				>{$currentWeather.weatherCode.description.replace(/-/g, ' ')}</strong
			>
			<div class="weather__feel-like mb-5">
				Feels Like <strong>{$currentWeather.apparentTemperature}°</strong>
			</div>
			<div>Rain: <strong>{$currentWeather.precipitationChance}%</strong></div>
			<div>Wind: <strong>{$currentWeather.windSpeed}km/h</strong></div>
		</div>
	{/if}

	{#if !$isLoading && !$currentWeather}
		<h2>Please select a location</h2>
	{/if}
</Card>

<style>
	.weather__temperature {
		font-size: 100px;
		line-height: 100px;
		font-weight: var(--font-weight-bold);
		letter-spacing: -5px;
		margin-bottom: 1rem;
	}
	.weather__high-low {
		display: flex;
		flex-direction: row;
		align-items: start;
		gap: 0.5rem;
		justify-content: space-between;
	}

	.weather__feel-like {
		font-size: var(--font-sm);
		text-align: right;
	}

	.weather__code-text {
		text-transform: capitalize;
	}

	.weather__icon {
		position: absolute;
		top: 30%;
		left: 80px;
	}

	.weather__icon--two-digits {
		left: 130px;
	}
</style>
