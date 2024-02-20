export const load = async ({ }) => {
    const query = `
    {
        sponsors(first: 50) {
            nodes {
                sponsorFields {
                    name
                    webpage
                    mainsponsor
                    logo {
                        node {
                            mediaItemUrl
                        }
                    }
                }
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

    if (!data.data?.sponsors) {
        console.error('Error fetching pages:', data.errors);
        return {
            sponsors: {},
            page: {
                title: 'Kevätpäivänseisaus'
            }
        }
    }

    //Map sponsors to a more usable format
    let sponsors = data.data.sponsors.nodes.map((/** @type {{ sponsorFields: { name: any; webpage: any; mainsponsor: any; logo: any; } }} */ sponsor) => {
        return {
            name: sponsor.sponsorFields.name,
            webpage: sponsor.sponsorFields.webpage,
            mainsponsor: sponsor.sponsorFields.mainsponsor,
            logo: sponsor.sponsorFields.logo.node.mediaItemUrl
        }
    })
    return {
        sponsors: sponsors,
        page: {
            title: 'Kevätpäivänseisaus'
        }
    };
}
    
    
   