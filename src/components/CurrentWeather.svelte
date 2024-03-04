<script lang="ts">
	import { isLoading, forecast, latitude, longitude } from '$lib/stores/forecast.store';
	import Card from './Card.svelte';
</script>


<p>Today</p>
<Card size="large">
	{#if $isLoading}
		<p>Loading...</p>
	{/if}

	{#if !$isLoading && $forecast}
  <div class="weather__container">
    <div>
      <h5 class="my-1">Now</h5>
      <div class="weather__temperature">{$forecast.current.temperature_2m}°</div>
      <div class="weather__high-low">
        <div>High: 10</div>
        <div>Low: 5</div>
      </div>
    </div>
    <div class="text-right">
      <strong>Partly Cloud</strong>
      <div class="weather__feel-like mb-5">Feels Like <strong>{$forecast.current.apparent_temperature}°</strong></div>
      <div>Rain: <strong>20%</strong></div>
      <div>Wind: <strong>10km/h</strong></div>
    </div>
  </div>
	{/if}

	{#if !$isLoading && !$forecast}
		<h2>Please select a location</h2>
	{/if}
</Card>

<style>
	.weather__container {
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: space-between;
	}

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
		justify-content: space-between;
	}

	.weather__feel-like {
		font-size: var(--font-sm);
		text-align: right;
	}
</style>
