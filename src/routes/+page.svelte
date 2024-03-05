<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CitySelect from '../components/CitySelect.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import FloatingCircle from '../components/FloatingCircle.svelte';

</script>

<CitySelect />
<PreciseLocationButton />
<CurrentWeather />

<FloatingCircle size="300px" top="15%" left="70%"></FloatingCircle>
<FloatingCircle size="100px" top="80%" left="5%"></FloatingCircle>
<FloatingCircle size="40px" top="90%" left="5%"></FloatingCircle>
