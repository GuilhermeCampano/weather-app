<script lang="ts">
	import { isMobile } from "$lib/stores/screen-detection.store";
	import CurrentWeather from "./CurrentWeather.svelte";
	import ForecastHourly from "./ForecastHourly.svelte";
	import ForecastNextDays from "./ForecastNextDays.svelte";


</script>

{#if $isMobile}
	<CurrentWeather />
	<ForecastHourly />
{:else}
	<CurrentWeather>
		<ForecastHourly />
	</CurrentWeather>
{/if}
<ForecastNextDays />