<script lang="ts">
	export let size = '200px';
	export let top = '0px';
	export let left = '0px';

	const circleTop = `calc(min(100vh - ${size}, ${top}))`;
	const circleLeft = `calc(min(100vw - ${size}, ${left}))`;
	const circleStyle = `width: ${size}; height: ${size}; top: ${circleTop}; left: ${circleLeft};`
</script>

<div class="floating-circle" style={circleStyle}></div>

<style>
	.floating-circle {
		border-radius: 50%;
		background: linear-gradient(#f78a95, #f8b36f);
		animation: float 5s ease-in-out infinite;
		z-index: -1;
		position: absolute;
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
