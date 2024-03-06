<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CitySelect from '../components/CitySelect.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import ForecastNextDays from '../components/ForecastNextDays.svelte';

</script>

<CitySelect />
<PreciseLocationButton />
<CurrentWeather />
<div class="my-5"></div>
<ForecastNextDays />
