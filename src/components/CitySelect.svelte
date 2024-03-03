<script lang="ts">
	import { cities } from '$lib/models/';

	import { latitude, longitude, selectedCity, fetchForecast } from '$lib/stores/forecast.store';
	$: {
		if($selectedCity.name !== 'Custom') {
			latitude.set($selectedCity.latitude);
			longitude.set($selectedCity.longitude);
		}
	}

	$: {
		const city = cities.find(city => city.latitude === $latitude && city.longitude === $longitude);
		if (!city) {
			selectedCity.set(cities[0]);
		}
	}
</script>

<select bind:value={$selectedCity} on:change={fetchForecast}>
  {#each cities as city (city.name)}
    <option value={city}>{city.name}</option>
  {/each}
</select>