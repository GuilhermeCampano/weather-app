<script lang="ts">
	import Icon from './UI/Icon.svelte';
	let menuOpen = false;

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

<div class="settings">

	<button
		class="settings__button"
		on:click={() => openMenu()}
		on:keydown={handleKeydown}
		aria-haspopup="true"
		aria-expanded={menuOpen}
	>
		<Icon name="gear" color="default" size="default" label="configuration" />
	</button>
	
	{#if menuOpen}
	<div class="settings__menu">
		<button on:click={() => closeMenu()} class="settings__button">
			<Icon name="close" label="close" color="default" size="default"/>
		</button>
		<ul>
			<li>Settings</li>
			<li>Profile</li>
			<li>Logout</li>
		</ul>
	</div>
	{/if}
</div>

<style>
	.settings {
		display: inline-block;
	}

	.settings__button {
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
	}

	.settings__menu {
		position: absolute;
		z-index: 20;
		width: 400px;
		height: 400px;
		top: 20px;
		right: 20px;
		list-style: none;
		background-color: var(--color-background);
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius-md);
	}
</style>
