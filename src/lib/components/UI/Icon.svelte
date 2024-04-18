<script lang="ts">
	import { IconColors, IconSizes, type IconName } from '$lib/models/icon.model';
	import { IconService } from '$lib/utils/icon-service';

	export let name: IconName;
	export let color: keyof typeof IconColors;
	export let size: keyof typeof IconSizes;
	export let label: string

	const iconSize = IconSizes[size] || IconSizes.small;
	const iconColor = IconColors[color] || IconColors.default;

	function parseIconContent(svgContent: string) {
		return svgContent.replace(
			'<svg ',
			`<svg style="width: ${iconSize}; height: ${iconSize}; fill: ${iconColor}; vertical-align: middle;" `
		);
	}
</script>

{#await IconService.getIcon(name).then(parseIconContent) then iconSvgContent}
	<span class="{$$restProps.class || ''}"  aria-label={label || name}>
		{@html iconSvgContent}
	</span>
{/await}