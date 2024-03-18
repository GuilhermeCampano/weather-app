<script lang="ts">
	import { isLoading, hourlyForecastCards } from '$lib/stores/forecast.store';
	import {Localization} from '$lib/utils/localization';
	import Card from '../UI/Card.svelte';
	import SkeletonAnimation from '../UI/SkeletonAnimation.svelte';
	import WeatherIcon from '../UI/WeatherIcon.svelte';

	function formatTime(time: string, index: number) {
		return index ===0 ? 'Now' : Localization.formatHourMinute(time);
	}
</script>

{#if $isLoading}
	<h6><SkeletonAnimation width="200px" height="2rem" /></h6>
	<SkeletonAnimation width="100%" height="116px" withElevation/>
{/if}

{#if !$isLoading && $hourlyForecastCards.length}
	<h6>Hourly Forecast</h6>
	<Card size="large" isCompact>
		<div class="hourly-card__content">
			{#each $hourlyForecastCards as hourForecastCard, index}
				<div class="hourly-card__item">
					<div>{formatTime(hourForecastCard.time, index)}</div>
					<WeatherIcon iconDetails={hourForecastCard.weatherCode} size="medium" />
					<div>{hourForecastCard.temperature}°</div>
				</div>
			{/each}
		</div>
	</Card>
{/if}

<style>
	.hourly-card__content {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		overflow-x: auto;
		padding-bottom: 0.5rem;
	}

	.hourly-card__item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
