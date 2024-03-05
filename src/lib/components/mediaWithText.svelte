<script lang="ts">
    import { type CoreMediaText } from '../types/components'
    
    export let block: CoreMediaText

    const textAlign = (val: string) => {
        switch(val) {
            case 'top': return 'flex-start'
            case 'bottom': return 'flex-end'
            default: return val
        }
    }
</script>

{#if block.mediaType === 'image'}
<div class="imageWithText" style="flex-direction: {block.mediaPosition === 'left' ? 'row' : 'row-reverse'}">
    <img src={block.mediaUrl} alt={block.mediaAlt} width="{block.mediaWidth}%">
    <div class="text" style="align-items:{textAlign(block.verticalAlignment)}; width:{100 - block.mediaWidth}%">
    {#each block.children as text}
        <p style="text-align: {text.align}">{text.content}</p>
    {/each}
    </div>
</div>
{/if}

<style lang="scss">
    .imageWithText {
        display: flex;

        .text {
            display: flex;

            p {
                width: 100%;
            }
        }
    }
</style>