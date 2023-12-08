<script lang="ts">
	import Paragraph from "$lib/components/paragraph.svelte";
    
    export let data
</script>


<h1>{data.page.title}</h1>
{#if data.page.editorBlocks}
    {#each data.page.editorBlocks as block}
        {#if block.__typename === "CoreParagraph"}
    <Paragraph {block} />

        {/if}
    {/each}
{/if}