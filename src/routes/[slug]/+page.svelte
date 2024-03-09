<script lang="ts">
	import components from '$lib/index';

	const component = (val: string) => {
		return (components as any)[val];
	};

	export let data;
</script>

{#if data.page.banner}
	<div class="top-banner">
		<img src={data.page.banner} alt={data.page.title} />
	</div>
{/if}
<div class="wrap {data.page.banner ? '' : 'padded'}">
	<h1 class="center">{data.page.title}</h1>
	{#if data.page.editorBlocks}
		{#each data.page.editorBlocks as block}
			<svelte:component this={component(block.name)} {block} />
		{/each}
	{/if}
</div>

<style lang="scss">

	.wrap.padded {
		padding-top: 70px;
	}
	.top-banner {
		width: 100%;
		height: 300px;
		overflow: hidden;
		margin: 0;
		@media (max-width: 800px) {
			height: 100vh;
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
			}
		}

		h1 {
			margin-top: 300px;
		}

		img {
			object-fit: cover;
			width: 100%;
			@media (max-width: 800px) {
				height: 100%;
			}
		}
	}

	@media (max-width: 800px) {
	}
</style>
