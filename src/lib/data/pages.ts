const getPageBySlug = async (slug: string) => {

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
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                slug: slug,
            },
        }),
    })
    // console.log(response)

    const data = await response.json()
    return data;
}

export { getPageBySlug }