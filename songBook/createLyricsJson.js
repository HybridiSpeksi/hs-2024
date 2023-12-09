import { writeFile } from 'fs'

const query = `
{
    songs {
      edges {
        node {
          songFields {
            title
            year
            scene
            type
            original_artist
            original_song
            lyrics
            production {
              ... on SongFieldsProductionToContentNodeConnection {
                edges {
                  node {
                    ... on Production {
                      title
                    }
                  }
                }
              }         
            }
          }
        }
      }
    }
}
`;

const songdata = async () => {
    let fetchdata = await fetch(process.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    })
    let jsondata = await fetchdata.json()
    return jsondata
}

const main = async () => {
    let data = await songdata()
    let songs = data.data.songs.edges

    const path = 'songBook/songs.json'
    writeFile(path, JSON.stringify(songs, null, 4), err => {
        if (err) {
            console.error(err)
            return
        }
        console.log('File has been created')
    })

}

main()

