<script lang="ts">
	import { latitude, longitude, resetSearchInput } from '$lib/stores/search-location.store';
	import { debounce } from '$lib/utils/debounce';
	import Icon from '$lib/components/UI/Icon.svelte';

	function getLocation() {
		try {
			navigator.geolocation.getCurrentPosition((position) => {
				latitude.set(position.coords.latitude);
				longitude.set(position.coords.longitude);
				resetSearchInput();
			});
		} catch (error) {
			console.error(error);
		}
	}
</script>

<button on:click={debounce(getLocation)} class="precise-location" tabindex="0">
	<Icon
		name="my_location"
		class="precise-location__icon"
		color="default"
		label="my location"
		size="default"
	/>
	<span class="precise-location__text">Use precise location</span>
</button>

<style>
	.precise-location {
		border: none;
		background-color: transparent;
		box-shadow: none;
		text-wrap: nowrap;
		align-items: center;
		display: inline-flex;
		vertical-align: middle;
		cursor: pointer;
		font-size: var(--font-md);
		font-weight: var(--font-weight-regular);
		font-family: inherit;
		margin-top: var(--spacing-md);
	}

	.precise-location:hover .precise-location__text {
		text-decoration: underline;
	}

	.precise-location :global(.precise-location__icon) {
		margin-right: 0.25rem;
	}
</style>
