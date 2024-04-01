<script lang="ts">
	enum IconSizes {
		small = '1rem',
		medium = '2rem',
		large = '3rem'
	}

	enum IconColors {
		default = 'currentColor',
		yellow = 'var(--color-icon-tertiary)',
		blue = 'var(--color-icon-secondary)',
		orange = 'var(--color-grey)'
	}

	import { IconService } from '$lib/utils/icon-service';

	export let name: string;
	export let color: keyof typeof IconColors = 'default';
	export let size: keyof typeof IconSizes = 'small';

	const iconSize = IconSizes[size] || IconSizes.small;
	const iconColor = IconColors[color] || IconColors.default;

	function parseIconContent(svgContent: string) {
		return svgContent.replace(
			'<svg ',
			`<svg style="width: ${iconSize}; height: ${iconSize}; fill: ${iconColor}" `
		);
	}
</script>

{#await IconService.getIcon(name).then(parseIconContent) then iconSvgContent}
	<span class={$$restProps.class || ''}>
		{@html iconSvgContent}
	</span>
{/await}