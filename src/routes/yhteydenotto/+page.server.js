export const load = async({ }) => {
    const query = `
    {
        people(first: 50) {
          nodes {
            personFields {
              jobs
              name
              type
              image {
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

    if (!data.data?.people) {
        console.error('Error fetching pages:', data.errors);
        return {
           people: {},
           page: {
            title: 'Yhteydenotto'
          }
        }
    }
    let people = groupByName(data.data.people.nodes)

    return {
        people,
        page: {
          title: 'Yhteydenotto'
        }
    };
}


const groupByName = (array) => {
  // Predefined categories
  const predefinedCategories = ['hallitus', 'toimihenkilo', 'tuotantotiimi'];

  // Initialize the result object with predefined categories
  const result = {};
  predefinedCategories.forEach(category => {
    result[category] = [];
  });

  // Group the rest of the objects by name
  array.forEach(obj => {
    if (!result[obj.personFields.type[0]]) {
      result[obj.personFields.type[0]] = [];
    }
    result[obj.personFields.type[0]].push(obj);
  });

  return result;
};