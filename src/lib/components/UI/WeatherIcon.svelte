<script lang="ts">
	import type { WeatherCodeDetails } from "$lib/models";

	export let iconDetails: WeatherCodeDetails;

	export let size: 'small' | 'medium' | 'large' = 'small';


</script>

<i class={`material-symbols-outlined icon--${size} icon--${iconDetails.color}`} aria-label={iconDetails.label}>
	{ iconDetails.icon }
</i>


<style>
	.icon--small {
		font-size: 1rem;
	}

	.icon--medium {
		font-size: 2rem;
	}

	.icon--large {
		font-size: 3rem;
	}

	.icon--yellow {
		color: var(--color-icon-tertiary);
	}

	.icon--blue {
		color: var(--color-icon-secondary);
	}

	.icon--orange {
		color: var(--color-grey);
	}
</style>
