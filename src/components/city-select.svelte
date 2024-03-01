<script lang="ts">
	import { latitude, longitude, forecast, fetchForecast } from '../stores/forecast.store';

	const cities = [
		{ name: 'New York', lat: 40.7128, lon: -74.006 },
		{ name: 'London', lat: 51.5074, lon: -0.1278 },
		{ name: 'Tokyo', lat: 35.6895, lon: 139.6917 },
		{ name: 'Dublin', lat: 53.3498, lon: -6.2603 },
		{ name: 'Sao Paulo', lat: -23.5505, lon: -46.6333 }
	];

	let selectedCity = cities[0]; // Default to the first city

	// Update the latitude and longitude stores when selectedCity changes
	$: {
		latitude.set(selectedCity.lat);
		longitude.set(selectedCity.lon);
		forecast.set(null);
	}
</script>

<select bind:value={selectedCity} on:change={fetchForecast}>
	{#each cities as city (city.name)}
		<option value={city}>{city.name}</option>
	{/each}
</select>
