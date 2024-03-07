<script lang="ts">
    import { type CoreImage } from '../types/components'
    
    export let block: CoreImage

    const justifyContent = (val: string) => {
        switch(val) {
            case 'left': return 'flex-start'
            case 'right': return 'flex-end'
            default: return val
        }
    }
</script>

<div class="container" style="justify-content: {justifyContent(block.align)}">
    <img src={block.src || block.url} alt={block.alt} width="{block.width}" height="{block.height}">
    {#if block.caption !== ''}
        {@html block.caption}
    {/if}
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
    }
</style>