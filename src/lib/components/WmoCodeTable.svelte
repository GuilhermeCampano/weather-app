<script lang="ts">
	import type { WeatherCodeDetails } from '$lib/models';
	import { WeatherCodeDetailsFactory } from '$lib/utils/weather-code-details-factory';
	import Icon from './UI/Icon.svelte';

	const allIcons: WeatherCodeDetails[] = new Array(100)
		.fill(0)
		.map((_, i) => new WeatherCodeDetailsFactory(i));
</script>

<a
	class="wmo__source"
	href="https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM"
	target="_blank">WMO Codes Source</a
>
<div class="wmo__grid">
	{#each allIcons as iconDetails}
		<div class="wmo__card">
			<div class="wmo__card-header">
				<div class="wmo__code">{iconDetails.wmoCode}</div>
				<div class="wmo__icon">
					<Icon
						name={iconDetails.icon}
						size="medium"
						color={iconDetails.color}
						label={iconDetails.label}
					/>
				</div>
			</div>
			<h5 class="wmo__label">{iconDetails.label}</h5>
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
		gap: var(--spacing-md);
	}

	.wmo__code {
		font-size: var(--font-xl);
	}

	.wmo__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px dashed var(--color-text);
		padding: var(--spacing-sm);
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
		background-color: var(--color-background);
	}

	.wmo__card:nth-child(even) {
		background-color: var(--color-background-light);
	}

	.wmo__code {
		font-weight: bold;
	}

	.wmo__label {
		font-weight: bold;
		margin: var(--spacing-sm) 0;
	}

	.wmo__meaning {
		font-size: var(--font-xs);
		text-align: center;
	}
</style>
