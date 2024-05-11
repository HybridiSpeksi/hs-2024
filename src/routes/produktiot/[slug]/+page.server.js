import { redirect } from "@sveltejs/kit";


const query = `
query getPageBySlug($slug: ID!) {
    production(id: $slug, idType: SLUG) {
      title
      productionFields {
        banner {
        node {
            mediaItemUrl
            altText
        }
        }
        color1
        color2
        color3
        poster {
        node {
            mediaItemUrl
            altText
        }
        }
        shows
        year
        synopsis
        statistics {
        premier
        shows
        spectators
        theatre
        }
    }
    }
  }
`
export const load = async ({params}) => {
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                slug: params.slug,
            },
        }),
    })

    if (response.ok) {
        const data = await response.json();

        if (!data.data.production) {
            throw redirect(302, '.')
        }
        return {
            production: data.data.production
        }
    } else {
        throw redirect(302, '.')
    }
}
