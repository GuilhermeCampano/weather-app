<script lang="ts">
	import type { ForecastCurrentCard } from '$lib/models';

	import WeatherIcon from '../UI/WeatherIcon.svelte';

	export let forecastCurrentCard: ForecastCurrentCard;
</script>

<div>
	<h5 class="my-1">Now</h5>
	<div class="weather__temperature">
		{forecastCurrentCard.temperature}°
		<span
			class="weather__icon"
			class:weather__icon--two-digits={forecastCurrentCard.temperature > 9}
			><WeatherIcon iconDetails={forecastCurrentCard.weatherCode} size="large" /></span
		>
	</div>
	<div class="weather__high-low">
		<div>High: {forecastCurrentCard.temperatureMax}°</div>
		<div>Low: {forecastCurrentCard.temperatureMin}°</div>
	</div>
</div>
<div class="text-right">
	<strong class="weather__code-text">{forecastCurrentCard.weatherCode.label}</strong>
	<div class="weather__feel-like mb-5">
		Feels Like <strong>{forecastCurrentCard.apparentTemperature}°</strong>
	</div>
	<div>Rain: <strong>{forecastCurrentCard.precipitationChance}%</strong></div>
	<div>Wind: <strong>{forecastCurrentCard.windSpeed}km/h</strong></div>
</div>
<slot />

<style>
	/* .weather__placeholder {
		width: 100%;
		text-align: center;
	} */
	.weather__temperature {
		font-size: 100px;
		line-height: 100px;
		font-weight: var(--font-weight-bold);
		letter-spacing: -5px;
		margin-bottom: 1rem;
		position: relative;
		width: auto;
		padding-right: 48px;
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
		top: 10px;
		right: 10px;
	}

	.weather__icon--two-digits {
		left: 130px;
	}
</style>
