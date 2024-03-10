<script lang="ts">
	import { WMOCodesMeaning, type WeatherCodeDetails } from '$lib/models';
	import { WeatherCodeDetailsBuilder } from '$lib/utils/weather-code-details';
	import WeatherIcon from './WeatherIcon.svelte';

	const allIcons: WeatherCodeDetails[] = new Array(100)
		.fill(0)
		.map((_, i) => new WeatherCodeDetailsBuilder(i));
</script>

<a
	class="wmo__source"
	href="https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM"
	target="_blank">WMO Codes Source</a
>
<div class="wmo__grid">
	{#each allIcons as iconDetails, index}
		<div class="wmo__card">
			<div class="wmo__card-header">
				<div class="wmo__code">{iconDetails.wmoCode}</div>
				<div class="wmo__icon"><WeatherIcon {iconDetails} size="medium" /></div>
			</div>
			<h5 class="wmo__label">{iconDetails.description}</h5>
			<div class="wmo__meaning">{iconDetails.wmoCodeDescription}</div>
		</div>
	{/each}
</div>

<style>

	.wmo__source {
		display: block;
		font-size: var(--font-md);
		margin-bottom: 1rem;
	}
	.wmo__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 16px;
	}

	.wmo__code{
		font-size: var(--font-xl);
	}

	.wmo__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px dashed var(--color-gray);
		padding: 0.5rem;
		box-shadow: var(--box-shadow);
	}

	.wmo__card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
		width: 100%;
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

	.wmo__label {
		font-weight: bold;
		margin: 8px 0;
	}

	.wmo__meaning{
		font-size: var(--font-xs);
		text-align: center;
	}
</style>
