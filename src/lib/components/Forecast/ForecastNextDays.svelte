<script lang="ts">
	import Card from '../UI/Card.svelte';
	import WeatherIcon from '../UI/WeatherIcon.svelte';
	import { Localization } from '$lib/utils/localization';
	import type { ForecastDayCard } from '$lib/models';

	export let weekForecastCards: ForecastDayCard[] = [];
</script>

<div class="forecast">
	{#each weekForecastCards as dayForecastCard, i}
		<Card size="small">
			<div class="forecast__text"></div>
			{i === 0 ? 'Today' : Localization.formatDayOfWeek(dayForecastCard.dayOfWeek)}
			<WeatherIcon iconDetails={dayForecastCard.weatherCode} size="large" />
			<div class="forecast__text">{dayForecastCard.temperature}°</div>
		</Card>
	{/each}
</div>

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
