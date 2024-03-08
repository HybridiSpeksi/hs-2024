<script lang="ts">
    import { type CoreParagraph } from '../types/components'

    export let block: CoreParagraph

</script>

<div style="text-align: {block.align}; max-width: 800px; margin: 0 auto;">
    {#if block?.content}
        <p class="{block.fontSize}">{@html block.content}</p>
    {/if}
</div>

