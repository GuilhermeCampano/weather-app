<script lang="ts">
	import { WMOCodesMeaning, type WeatherCodeDetails } from '$lib/models';
	import { WeatherApiService } from '$lib/services/weather-api.service';
	import WeatherIcon from './WeatherIcon.svelte';


	const allIcons: WeatherCodeDetails[] = new Array(100)
		.fill(0)
		.map((_, i) => WeatherApiService.geWeatherCodeDetails(i));
</script>

<a
	href="https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM"
	target="_blank">WMO Weather Icons</a
>
<div class="wmo__grid">
	{#each allIcons as iconDetails, index}
		<div class="wmo__card">
			<div class="wmo__code">{index}</div>
      <div class="wmo__meaning">{WMOCodesMeaning[index]}</div>
			<div class="wmo__presentation">{iconDetails.description}</div>
			<div class="wmo__icon"><WeatherIcon {iconDetails} size="medium" /></div>
		</div>
	{/each}
</div>

<style>
	.wmo__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 16px;
	}

	.wmo__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid var(--color-gray);
		padding: 8px;
	}

	.wmo__card:nth-child(odd) {
		background-color: var(--color-white);
	}

	.wmo__card:nth-child(even) {
		background-color: var(--color-light-gray);
	}

	.wmo__code {
		font-weight: bold;
	}

	.wmm__presentation {
		margin: 8px 0;
	}
</style>
