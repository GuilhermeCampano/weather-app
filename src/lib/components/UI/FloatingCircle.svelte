<script lang="ts">
	export let size = '200px';
	export let top = 'auto';
	export let left = 'auto';
	export let right = 'auto';
	export let bottom = 'auto';
	
	const circleStyle = `width: ${size}; height: ${size}; top: ${top}; left: ${left}; right: min(${right}, 300px); bottom: ${bottom}`
</script>

<div class="floating-circle" style={circleStyle}></div>

<style>
	.floating-circle {
		border-radius: 50%;
		background: linear-gradient(var(--color-secondary), var(--color-tertiary));
		animation: float 5s ease-in-out infinite;
		z-index: -1;
		position: fixed;
	}	

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}
</style>
