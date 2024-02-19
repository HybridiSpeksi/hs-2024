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
        productions {
            nodes {
                
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

    // Access the first element of the nodes array
    let sponsors = data.data.sponsors.nodes.map((/** @type {import("$lib/types/common").Sponsor} */ sponsor) => {
        return {
            name: sponsor.name,
            webpage: sponsor.webpage,
            mainsponsor: sponsor.mainsponsor,
            logo: sponsor.logo
        }
    })
    
    return {
        sponsors: sponsors,
        page: {
            title: 'Kevätpäivänseisaus'
        }
    };
}
    
    
   