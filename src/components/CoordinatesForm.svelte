
<script lang="ts">
	import { fetchForecast, latitude, longitude } from "$lib/stores/forecast.store";

</script>

<input type="number" bind:value={$latitude} />
<input type="number" bind:value={$longitude} />

<button on:click={() => fetchForecast()}>Fetch Forecast</button>
