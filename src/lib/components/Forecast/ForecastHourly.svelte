<script lang="ts">
	import type { ForecastHourCard, WeatherCodeDetails } from '$lib/models';
	import type { IconProperties } from '$lib/models/icon.model';
	import { units } from '$lib/stores/user-settings.store';
	import { getTemperatureFormatted } from '$lib/utils/convert-units';
	import { Localization } from '$lib/utils/localization';
	import Icon from '../UI/Icon.svelte';

	export let hourlyForecastCards: ForecastHourCard[] = [];

	function formatTime(time: string, index: number) {
		return index === 0 ? 'Now' : Localization.formatHourMinute(time);
	}

	function getIconProperties(icoDetails: WeatherCodeDetails): IconProperties {
		return {
			name: icoDetails.icon,
			color: icoDetails.color,
			label: icoDetails.label,
			size: 'medium'
		};
	}
</script>

<div class="hourly-card__content">
	{#each hourlyForecastCards as hourForecastCard, index}
		<div class="hourly-card__item">
			<div>{formatTime(hourForecastCard.time, index)}</div>
			<Icon {...getIconProperties(hourForecastCard.weatherCode)} />
			<div>{getTemperatureFormatted(hourForecastCard.temperature, $units)}</div>
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
		gap: var(--spacing-xs);
	}
</style>
