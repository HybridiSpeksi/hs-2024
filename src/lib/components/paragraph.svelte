<script>
    /**
	 * @type {{
     * content: String
     * align: String
     * fontSize: String
     * }}
	 */
     export let block
</script>

<!-- {#if block?.renderedHtml}
    {@html block.renderedHtml}
{/if} -->

<div style="text-align: {block.align};
    font-size: {block.fontSize}">
    {@html block.content}
</div>