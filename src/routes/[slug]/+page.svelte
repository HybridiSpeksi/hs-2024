<script lang="ts">
	import { onMount } from "svelte";
    import { page } from "$app/stores";
	import Paragraph from "$lib/paragraph.svelte";

    const query = `
    query getPageBySlug($slug: ID!) {
        page(id: $slug, idType: URI) {
            title
            editorBlocks {
                renderedHtml
                __typename
		    }
        }
    }
    `
    
    let stuff: { data: { page: {
		editorBlocks: any; title: string, content: string 
} } } = { data: { page: {
	title: "", content: "",
	editorBlocks: undefined
} } };
    
    onMount(async () => {
        const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables: {
                    slug: $page.params.slug,
                },
            }),
        })
        console.log(response)
       
        const data = await response.json()
        stuff = data
    })

</script>


        <h1>{stuff?.data?.page?.title}</h1>
        {#if stuff.data.page.editorBlocks}
            {#each stuff.data.page.editorBlocks as block}
                {#if block.__typename === "CoreParagraph"}
                    <Paragraph {block} />
                {:else if block.__typename === "CoreImage"}
                    <!-- <Image {block} /> -->
                {/if}
            {/each}
        {/if}