<script lang="ts">
	import PreciseLocationButton from '../components/PreciseLocationButton.svelte';
	import CitySelect from '../components/CitySelect.svelte';
	import CurrentWeather from '../components/CurrentWeather.svelte';
	import FloatingCircle from '../components/FloatingCircle.svelte';
  import { onMount } from 'svelte';

	let showFloatingCircles = false;
  onMount(() => showFloatingCircles = true);
</script>

<CitySelect />
<PreciseLocationButton />
<CurrentWeather />

{#if showFloatingCircles}
	<FloatingCircle size="400px" top="10%" left="70%"></FloatingCircle>
	<FloatingCircle size="100px" top="80%" left="5%"></FloatingCircle>
	<FloatingCircle size="40px" top="90%" left="5%"></FloatingCircle>
{/if}
