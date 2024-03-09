import { components } from "./query_components"

const getPageBySlug = async (slug: string) => {

    // Build query based on desired components and attributes
    const query = `
    query getPageBySlug($slug: ID!) {
        page(id: $slug, idType: URI) {
            banner {
                bannerImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
            title
            editorBlocks {
                __typename
                parentClientId
                ${components.map((c) => (
                    `... on ${c.name} {
                        attributes {
                            ${c.attributes.map((attribute) => (
                                `${attribute}`
                            ))}
                        }
                        ${c.innerBlocks ? c.innerBlocks : ''}
                    }`
                ))}
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

    const { data, extensions } = await response.json()

    /**
     * Filter and format data before returning it
     * 1. Remove duplicate paragraphs caused by Media + Text block
     * 2. Format data to look more clean
     */
    const filterDuplicateParagraphs = data.page.editorBlocks.filter((block) => block.parentClientId == null)
    const formatEditorBlocks = filterDuplicateParagraphs.map((block) => ({
        name: block.__typename,
        ...block.attributes,
        children: block.innerBlocks ? block.innerBlocks.map((innerBlock) => ({ ...innerBlock.attributes })) : []
    }))

    // Ensure the original frame of data remains intact
    const returnData = {
        data: {
            page: {
                title: data.page.title,
                editorBlocks: formatEditorBlocks,
                banner: data.page.banner.bannerImage?.node.mediaItemUrl || "",
            }
        },
        extensions: extensions
    }

    return returnData
}

export { getPageBySlug }