<script lang="ts">
	export let size: 'small' | 'large' = 'small';
	export let isCompact: boolean = false;
	export let isLoading: boolean = false;

	$: loadingClass = isLoading ? 'skeleton' : '';
	$: compactClass = isCompact ? 'card--compact' : '';
	$: cardClasses = `card card--${size} ${compactClass} ${loadingClass}`;
</script>

<div class={cardClasses}>
	{#if !isLoading}
		<slot />
	{/if}
</div>

<style>
	.card {
		display: flex;
		padding: var(--spacing-md);
		margin: var(--spacing-md) 0;
		border-radius: 20px;
		border: 1px solid var(--color-border-light);
		box-shadow: var(--box-shadow);
		background-color: var(--color-background-transparent);
		filter: grayscale(0%);
		transition: all 0.5s ease;
	}

	.card--small {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		flex-shrink: 0;
		flex-grow: 1;
		flex-basis: 100px;
		gap: 0 var(--spacing-sm);
		padding: var(--spacing-sm) 0px;
    min-height: 135px;
		margin-top: 0;
	}

	.card--large {
		display: flex;
		flex-flow: wrap;
		row-gap: var(--spacing-md) ;
		flex-direction: row;
		align-items: start;
		justify-content: space-between;
		position: relative;
		right: auto;
		width: calc(100vw - var(--spacing-sm));
		min-height: 200px;
		margin: 0 auto;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	@media screen and (min-width: 768px) {
		.card--large {
			width: auto;
			margin-right: auto;
			padding-inline: var(--spacing-lg);
			border-radius: 20px;
			right: 0;
		}
	}

	.card--compact {
		min-height: fit-content;
	}
</style>
