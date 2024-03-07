<script lang="ts">
	import { isLoading, hourlyForecastCards } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
</script>

{#if !$isLoading && $hourlyForecastCards.length}
    <p>Hourly Forecast</p>
		<Card size="large" isCompact>
      <div class="hourly-card__content">
			{#each $hourlyForecastCards as hourForecastCard, i}
        <div class="hourly-card__item">
          <div>{hourForecastCard.time}</div>
          <WeatherIcon iconDetails={hourForecastCard.weatherCode} size="medium" />
          <div>{hourForecastCard.temperature}°</div>
        </div>
			{/each}
		</Card>
{/if}

<style>

  .hourly-card__content{
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