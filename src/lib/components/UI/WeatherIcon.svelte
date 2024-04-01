<script lang="ts">
	import type { WeatherCodeDetails } from "$lib/models";

	import Icon from './Icon.svelte';
	export let iconDetails: WeatherCodeDetails;

	export let size: 'small' | 'medium' | 'large' = 'small';


</script>

<Icon name={iconDetails.icon} size={size} color={iconDetails.color}/>
