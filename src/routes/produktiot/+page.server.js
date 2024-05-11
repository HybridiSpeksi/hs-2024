import { redirect } from "@sveltejs/kit";

const query = `
{
    productions {
        nodes {
        slug
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
}
`;

export const load = async () => {
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
        })
    });

    if (response.ok) {
    
        try {
            let data = await response.json();
            return {
                productions: data.data.productions
            }
        } catch (e) {
            throw redirect(307, '.');
        }
    }
    throw redirect(307, '.');
}
