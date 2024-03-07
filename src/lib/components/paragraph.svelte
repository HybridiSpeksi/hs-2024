<script lang="ts">
    import { type CoreParagraph } from '../types/components'

    export let block: CoreParagraph

</script>

<div style="text-align: {block.align};">
    {#if block?.content}
        <p class="{block.fontSize}">{@html block.content}</p>
    {/if}
</div>