<script lang="ts">
	import { page } from '$app/stores';
	import WeatherIcon from '$lib/components/UI/WeatherIcon.svelte';
	import type { WeatherCodeDetails } from '$lib/models';

	const errorIcon = {
		icon: 'thunderstorm',
		color: 'blue',
		label: 'Error icon'
	} as WeatherCodeDetails;
</script>

<div class="error__container">
	<span class="error__icon">
		<WeatherIcon iconDetails={errorIcon} size="large" />
	</span>
	<h1 class="error__status"> {$page.status}</h1>
	<span class="error__message">{$page.error?.message}</span>
</div>

<style>
	.error__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 90vh;
		color: var(--color-icon-secondary);
    max-width: 250px;
    margin: 0 auto;
	}

	.error__status {
		margin: 0px;
		font-size: 150px;
		line-height: 120px;
	}

	.error__message {
		font-size: 2em;
	}
	.error__icon {
    align-self: flex-end;
	}
</style>
