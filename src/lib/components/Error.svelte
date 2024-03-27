<script lang="ts">
	import type { WeatherCodeDetails } from '$lib/models';
	import WeatherIcon from './UI/WeatherIcon.svelte';

	export let size: 'small' | 'large' = 'large';
	export let status: number | null = null;
	export let message = 'Something went wrong';

	const errorIcon = {
		icon: 'thunderstorm',
		color: 'blue',
		label: 'Error icon'
	} as WeatherCodeDetails;
</script>

<div class="error__container" class:error__container--small={size === 'small'}>
	<span class="error__icon">
		<WeatherIcon iconDetails={errorIcon} size="large" />
	</span>
	<h1 class="error__status">{status ?? 'OPS...'}</h1>
	<span class="error__message">{message}</span>
</div>

<style>
	.error__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 90dvh;
		color: var(--color-icon-secondary);
		max-width: 250px;
		margin: 0 auto;
		font-size: 150px;
	}

	.error__container--small {
		height: 100%;
		font-size: 80px;
	}

	.error__status {
		margin: 0px;
		font-size: 1em;
		line-height: 0.25em;
	}

	.error__message {
		font-size: 0.25em;
		margin-top: 1.1em;
	}

	.error__icon {
		align-self: flex-end;
    animation: floatingAnimation 2s infinite ease-out, thunderAnimation 4s infinite ease-out;
	}
	
	@keyframes floatingAnimation {
    0%, 100% {
      transform: translateY(1%)
    }
    50% {
      transform: translateY(0);
    }
  }

  @keyframes thunderAnimation {
    0%, 100% {
      filter: invert(0);
    }
		60% {
			filter: invert(0);
		}
    80% {
      filter: invert(0.8);
    }
  }
</style>
