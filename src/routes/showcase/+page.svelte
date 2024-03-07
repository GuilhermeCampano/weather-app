<script lang="ts">
	import type { WeatherCodeDetails } from '$lib/models';
	import { WeatherApiService } from '$lib/services/weather-api.service';
	import Card from '../../components/Card.svelte';
	import WeatherIcon from '../../components/WeatherIcon.svelte';

	const allIcons: WeatherCodeDetails[] = new Array(100)
		.fill(0)
		.map((_, i) => WeatherApiService.geWeatherCode(i));
</script>

<div class="card__container">
{#each allIcons as iconDetails, index}
		<Card size="small">
      <div>{index}</div>
      <div>{iconDetails.description}</div>
			<WeatherIcon {iconDetails} />
		</Card>
    {/each}
	</div>

<style>
	.card__container {
		display: flex;
		flex-direction: row;
    flex-wrap: wrap;
		gap: 0 0.5rem;
    text-wrap: nowrap;
	}

</style>
