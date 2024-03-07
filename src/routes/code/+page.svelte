<script lang="ts">
  import type { WeatherCodeDetails } from '$lib/models';
  import { WeatherApiService } from '$lib/services/weather-api.service';
  import WeatherIcon from '../../components/WeatherIcon.svelte';

  const allIcons: WeatherCodeDetails[] = new Array(100)
    .fill(0)
    .map((_, i) => WeatherApiService.geWeatherCodeDetails(i));
</script>

<a href="https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM" target="_blank">WMO Weather Icons</a>
<table class="icon-table">
  <thead>
    <tr>
      <th>WMO Code</th>
      <th>Description</th>
      <th>Icon</th>
    </tr>
  </thead>
  <tbody>
    {#each allIcons as iconDetails, index}
      <tr>
        <td>{index}</td>
        <td>{iconDetails.description}</td>
        <td><WeatherIcon {iconDetails} size="medium" /></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .icon-table {
    width: 100%;
    border-collapse: collapse;
  }

  .icon-table th, .icon-table td {
    border: 1px solid var(--color-gray);
    padding: 8px;
    text-align: center;
  }
	.icon-table tr:nth-child(odd) {
		background-color: var(--color-white);
	}

  .icon-table tr:nth-child(even) {
    background-color: var(--color-light-gray);
  }


  .icon-table th {
    background-color: var(--color-blue);
    color: var(--color-white);
  }
</style>