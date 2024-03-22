<script lang="ts">
	import type { ForecastHourCard } from '$lib/models';
	import { Localization } from '$lib/utils/localization';
	import WeatherIcon from '../UI/WeatherIcon.svelte';

	export let hourlyForecastCards: ForecastHourCard[] = [];

	function formatTime(time: string, index: number) {
		return index === 0 ? 'Now' : Localization.formatHourMinute(time);
	}
</script>

<div class="hourly-card__content">
	{#each hourlyForecastCards as hourForecastCard, index}
		<div class="hourly-card__item">
			<div>{formatTime(hourForecastCard.time, index)}</div>
			<WeatherIcon iconDetails={hourForecastCard.weatherCode} size="medium" />
			<div>{hourForecastCard.temperature}°</div>
		</div>
	{/each}
</div>

<style>
	.hourly-card__content {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-md);
		overflow-x: auto;
		padding-bottom: var(--spacing-sm);
	}

	.hourly-card__item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
