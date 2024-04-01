<script lang="ts">
	import type { ForecastCurrentCard } from '$lib/models';
	import Icon from '../UI/Icon.svelte';
	export let forecastCurrentCard: ForecastCurrentCard;
	const iconDetails = forecastCurrentCard.weatherCode;
</script>

<div>
	<h6 class="weather__title">Now</h6>
	<div class="weather__temperature">
		{forecastCurrentCard.temperature}°
		<span
			class="weather__icon"
			class:weather__icon--two-digits={forecastCurrentCard.temperature > 9}
		>
			<Icon
				name={iconDetails.icon}
				color={iconDetails.color}
				size="large"
				label={iconDetails.label}
			/>
		</span>
	</div>
	<div class="weather__high-low">
		<div>High: {forecastCurrentCard.temperatureMax}°</div>
		<div>Low: {forecastCurrentCard.temperatureMin}°</div>
	</div>
</div>
<div class="text-right">
	<strong class="weather__code-text">{forecastCurrentCard.weatherCode.label}</strong>
	<div class="weather__feel-like">
		Feels Like <strong>{forecastCurrentCard.apparentTemperature}°</strong>
	</div>
	<div>Rain: <strong>{forecastCurrentCard.precipitationChance}%</strong></div>
	<div>Wind: <strong>{forecastCurrentCard.windSpeed} km/h</strong></div>
</div>
<slot />

<style>
	.weather__title {
		margin: 0px;
	}
	.weather__temperature {
		font-size: 100px;
		line-height: 100px;
		font-weight: var(--font-weight-bold);
		margin-bottom: 1rem;
		position: relative;
		width: auto;
		padding-right: var(--spacing-lg);
		letter-spacing: -5px;
	}
	.weather__high-low {
		display: flex;
		flex-direction: row;
		align-items: start;
		gap: var(--spacing-md);
		justify-content: start;
	}

	.weather__feel-like {
		font-size: var(--font-sm);
		text-align: right;
		margin-bottom: Var(--spacing-md);
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
