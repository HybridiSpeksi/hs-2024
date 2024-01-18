export const load = async({ }) => {
    const query = `
    {
        pages(where: {parent: null}) {
            nodes {
                id
                title
                uri
            }
        }
    }
    `;

    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    });

    const data = await response.json();

    if (!data.data || !data.data.pages) {
        console.error('Error fetching pages:', data.errors);
        return [];
    }

    return {
        nodes: data.data.pages.nodes
    };
}
