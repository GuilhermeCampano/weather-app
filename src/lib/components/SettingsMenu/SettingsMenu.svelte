<script lang="ts">
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import clickOutside from '$lib/utils/click-outside';
	import Icon from '../UI/Icon.svelte';
	import SettingsOptions from './SettingsOptions.svelte';

	let menuOpen = false;

	function handleClickOutside() {
		if (menuOpen) {
			closeMenu();
		}
	}

	function openMenu() {
		menuOpen = true;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			openMenu();
		}
	}
</script>

<div class="settings" use:clickOutside={handleClickOutside}>
	<button
		class="settings__button"
		on:click|stopPropagation={() => openMenu()}
		on:keydown={handleKeydown}
		aria-haspopup="true"
		aria-expanded={menuOpen}
	>
		<Icon name="gear" color="default" size="default" label="configuration" />
	</button>

	{#if menuOpen}
		<div class="settings__menu" transition:scale={{ start: 0.5, easing: cubicOut }}>
			<button on:click={() => closeMenu()} class="settings__button settings__button--close">
				<Icon name="close" label="close" color="default" size="default" />
			</button>
			<SettingsOptions />
		</div>
	{/if}
</div>

<style>
	.settings {
		position: relative;
		display: inline-block;
	}

	.settings__button {
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
	}
	.settings__button--close {
		width: 100%;
		text-align: right;
		margin-bottom: var(--spacing-sm);
	}

	.settings__menu {
		position: absolute;
		z-index: 20;
		width: 400px;
		height: 400px;
		top: 0px;
		right: 0px;
		list-style: none;
		padding: var(--spacing-sm);
		background-color: var(--color-background);
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius-md);
	}

	@media (max-width: 720px) {
		.settings__menu {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
		}
	}
</style>
