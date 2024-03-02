
<script lang="ts">
  import { latitude, longitude, fetchForecast } from '../stores/forecast.store';
</script>

<input type="number" bind:value={$latitude} />
<input type="number" bind:value={$longitude} />

<button on:click={() => fetchForecast()}>Fetch Forecast</button>
