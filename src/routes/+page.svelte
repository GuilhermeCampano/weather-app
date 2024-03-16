<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import ForecastNextDays from '../components/ForecastNextDays.svelte';
	import ForecastHourly from '../components/ForecastHourly.svelte';
	import LocationSearchAutocomplete from '../components/LocationSearchAutocomplete/LocationSearchAutocomplete.svelte';
	import { onMount } from 'svelte';
	import ApiService from '$lib/utils/api-service';

	export let data;

	onMount(() => {
		ApiService.token = data.props.token;
	});
</script>

<LocationSearchAutocomplete />
<PreciseLocationButton />
<CurrentWeather />
<ForecastHourly />
<ForecastNextDays />
