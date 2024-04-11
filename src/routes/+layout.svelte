<script lang="ts">
	import FloatingCircle from "$lib/components/UI/FloatingCircle.svelte";
	import Icon from "$lib/components/UI/Icon.svelte";
</script>

<header class="header">
	<img src="images/logo.png" alt="logo" class="header__logo"/>
	<Icon name="gear" color="default" size="default" label="configuration" class="header__icon" />
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
		margin-bottom: var(--spacing-sm);
	}

	.header__logo {
		width: 80px;
		height: auto;
	}

	:global(.header__icon) {
		padding-top: 8px;
	}
</style>