<script lang="ts">
    import Header from '$lib/components/header.svelte'
    import Footer from '$lib/components/footer.svelte'
    import { page } from '$app/stores';
    import '../style/app.scss'
    export let data;
</script>

<style lang="scss">
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>
<svelte:head>
    <title>{$page.data?.page?.title ? "Hybridispeksi - " + $page.data.page.title : "Hybridispeksi"}</title>
</svelte:head>
<Header {data} />
<slot />
<Footer />
