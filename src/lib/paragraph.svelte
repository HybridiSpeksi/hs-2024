<script>
    /**
	 * @type {{ renderedHtml: any; }}
	 */
     export let block
</script>

{#if block?.renderedHtml}
    {@html block.renderedHtml}
{/if}


