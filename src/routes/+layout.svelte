<script lang="ts">
	import SettingsMenu from '$lib/components/SettingsMenu/SettingsMenu.svelte';
	import FloatingCircle from '$lib/components/UI/FloatingCircle.svelte';
	import ApiService from '$lib/utils/api-service.js';
	import { onMount } from 'svelte';

	export let data: { token: string };

	onMount(async () => {
		saveToken(data.token);
		await detectSWUpdate();
	});

	function saveToken(token: string) {
		ApiService.token = token;
	}

	async function detectSWUpdate() {
		if ('serviceWorker' in navigator) {
			const registration = await navigator.serviceWorker.getRegistration();
			if (registration && registration.waiting) {
				registration.waiting.postMessage({ type: 'SKIP_WAITING' });
			}
		}
	}

</script>

<header class="header">
	<img src="/images/logo.png" alt="logo" class="header__logo" />
	<SettingsMenu />
</header>

<main>
	<FloatingCircle size="300px" top="15%" right="10%"></FloatingCircle>
	<FloatingCircle size="100px" top="80%" left="5%"></FloatingCircle>
	<FloatingCircle size="40px" top="90%" left="5%"></FloatingCircle>
	<slot />
</main>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: start;
		height: min-content;
		margin-bottom: var(--spacing-md);
	}

	.header__logo {
		width: 80px;
		height: auto;
	}

	.header :global(.header__icon) {
		padding-top: 8px;
	}
</style>
