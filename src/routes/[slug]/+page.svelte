<script lang="ts">
    import components from "$lib/index"
    
    const component = (val: string) => {
        return (components as any)[val]
    }

    export let data

</script>


<h1>{data.page.title}</h1>
{#if data.page.editorBlocks}
    {#each data.page.editorBlocks as block}
        <svelte:component this={component(block.name)} {block} />
    {/each}
{/if}