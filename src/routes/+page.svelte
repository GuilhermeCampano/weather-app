<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CitySelect from '../components/CitySelect.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import ForecastNextDays from '../components/ForecastNextDays.svelte';
	import ForecastHourly from '../components/ForecastHourly.svelte';
</script>

<CitySelect />
<PreciseLocationButton />
<CurrentWeather />
<ForecastHourly />
<ForecastNextDays />
