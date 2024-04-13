<script lang="ts">
	import Card from '../UI/Card.svelte';
	import { Localization } from '$lib/utils/localization';
	import type { ForecastDayCard, WeatherCodeDetails } from '$lib/models';
	import Icon from '../UI/Icon.svelte';
	import type { IconProperties } from '$lib/models/icon.model';
	import { units } from '$lib/stores/user-settings.store';
	import { getTemperatureFormatted } from '$lib/utils/convert-units';

	export let weekForecastCards: ForecastDayCard[] = [];

	function getIconProperties(icoDetails: WeatherCodeDetails): IconProperties {
		return {
			name: icoDetails.icon,
			color: icoDetails.color,
			label: icoDetails.label,
			size: 'large'
		};
	}

</script>

<div class="forecast">
	{#each weekForecastCards as dayForecastCard, i}
		<Card size="small">
			<div class="forecast__text"></div>
			{i === 0 ? 'Today' : Localization.formatDayOfWeek(dayForecastCard.dayOfWeek)}
			<Icon {...getIconProperties(dayForecastCard.weatherCode)} />
			<div class="forecast__text">{getTemperatureFormatted(dayForecastCard.temperature, $units)}</div>
		</Card>
	{/each}
</div>

<style>
	.forecast {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-md);
		overflow-x: auto;
	}

	.forecast__text {
		font-size: 1.5rem;
		font-weight: 400;
	}
</style>
