<script>
    /**
	 * @type {{
     * content: String
     * align: String
     * fontSize: String
     * }}
	 */
     export let block;

</script>

<div style="text-align: {block.align};">
    {#if block?.content}
        <p class="{block.fontSize}">{@html block.content}</p>
    {/if}
</div>