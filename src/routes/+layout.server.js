export const load = async ({ }) => {
    const query = `
    {
        menu(id: "navi", idType: SLUG) {
          menuItems {
            nodes {
              id
              url
              label
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
    let nodes;
    if (!data.data || !data.data.menu) {
        console.error('Error fetching pages:', data.errors);
        nodes = [];
    } else {
        console.log(data)
        nodes = data.data.menu.menuItems.nodes;
    }

    const address_query = `
    {
        addresses(where: {title: "Osoitetiedot"}) {
          nodes {
            id
            addressFields {
              osoite
              sahkopossti
              tilinnumero
              yTunnus
            }
          }
        }
      }
    `;

    const address_res = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: address_query
        })
    });

    const adress_data = await address_res.json();
    let address;
    if (!adress_data.data || !adress_data.data.addresses) {
        console.error('Error fetching address:', adress_data.errors);
        address = [];
    } else {
        address = adress_data.data.addresses.nodes[0].addressFields;
    }

    return {
        nodes: nodes,
        address: address
    };
}
