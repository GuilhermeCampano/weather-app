<script lang="ts">
	import { latitude, longitude, forecast, fetchForecast } from '../stores/forecast.store';

	interface CityOption {
		name: string;
		latitude: number | null;
		longitude: number | null;
	}

	const cities: CityOption[] = [
		{name: 'Custom', latitude: null, longitude: null},
		{ name: 'New York', latitude: 40.7128, longitude: -74.006 },
		{ name: 'London', latitude: 51.5074, longitude: -0.1278 },
		{ name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
		{ name: 'Dublin', latitude: 53.3498, longitude: -6.2603 },
		{ name: 'Sao Paulo', latitude: -23.5505, longitude: -46.6333 }
	];

	let selectedCity = cities[0];

	$: {
    if(selectedCity.name !== 'Custom') {
      latitude.set(<number>selectedCity.latitude);
      longitude.set(<number>selectedCity.longitude);
    }
    forecast.set(null);
  }

  $: {
    const city = cities.find(city => city.latitude === $latitude && city.longitude === $longitude);
    if (!city) {
      selectedCity = cities[0]; // 'Custom' option
    }
  }
</script>

<select bind:value={selectedCity} on:change={fetchForecast}>
	{#each cities as city (city.name)}
		<option value={city}>{city.name}</option>
	{/each}
</select>
