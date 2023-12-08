<script lang="ts">
    import Header from '$lib/components/header.svelte'
    import Footer from '$lib/components/footer.svelte'
    import '../style/app.scss'
</script>

<style lang="scss">
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>

<Header  />
<slot />
<Footer />