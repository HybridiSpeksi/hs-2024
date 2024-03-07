<script lang="ts">
    import { type CoreHeading } from '../types/components'

    export let block: CoreHeading

</script>

<div style="text-align: {block.textAlign}">
    {#if block.level === 1}
    <h1>{@html block.content}</h1>

    {:else if block.level === 2}
    <h2>{@html block.content}</h2>

    {:else if block.level === 3}
    <h3>{@html block.content}</h3>

    {:else if block.level === 4}
    <h4>{@html block.content}</h4>

    {:else if block.level === 5}
    <h5>{@html block.content}</h5>

    {:else if block.level === 6}
    <h6>{@html block.content}</h6>
    {/if}
</div>