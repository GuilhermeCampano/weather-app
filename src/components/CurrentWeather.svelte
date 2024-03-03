<script lang="ts">
	import { isLoading, forecast, latitude, longitude } from "$lib/stores/forecast.store";
</script>

{#if $isLoading}
  <p>Loading...</p>
{/if}

{#if !$isLoading && $forecast}
  <h3>Current Weather on {$latitude} | {$longitude}</h3>
  <h4>Temperature: {$forecast.current.temperature_2m}</h4>
  <h4>Feels like: {$forecast.current.apparent_temperature}</h4>  
{/if}

{#if !$isLoading && !$forecast}
  <p>No data available</p>
{/if}