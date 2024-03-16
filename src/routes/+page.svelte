<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import ForecastNextDays from '../components/ForecastNextDays.svelte';
	import ForecastHourly from '../components/ForecastHourly.svelte';
	import LocationSearchAutocomplete from '../components/LocationSearchAutocomplete/LocationSearchAutocomplete.svelte';

</script>

<LocationSearchAutocomplete />
<PreciseLocationButton />
<CurrentWeather />
<ForecastHourly />
<ForecastNextDays />
