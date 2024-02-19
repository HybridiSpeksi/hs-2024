import { writeFile } from 'fs'

const query = `
query getSongs(
    $first: Int
    $after: String,
  ) {
    songs (first: $first, after: $after) {
      pageInfo {
        hasNextPage,
        endCursor
      }
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
`;

const songdata = async (first, after) => {
    let fetchdata = await fetch(process.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          query,
          variables: {
            first: first,
            after: after
          }
        })
    })
    let jsondata = await fetchdata.json()
    return jsondata
}

const main = async () => {
  let startTime = new Date().getTime()
  let nextPage = true
  let after = ""
  let songs = []

  while (nextPage) {
    let data = await songdata(50, after)
    // console.log(data)
    songs = songs.concat(data.data.songs.edges)
    nextPage = data.data.songs.pageInfo.hasNextPage
    after = data.data.songs.pageInfo.endCursor
  }

  let flatterSongs = songs.map(({node}) => node.songFields)
  // take type out of array inside the song
  flatterSongs = flatterSongs.map(song => {
    song.type = song.type[0],
    song.production = song.production?.edges[0].node.title
    song.year = parseInt(song.year)
    song.lyrics = song.lyrics.replaceAll("\r\n","\n")
    return song
  })

  const path = 'src/lib/data/songs.json'
  writeFile(path, JSON.stringify(flatterSongs, null, 4), err => {
      if (err) {
          console.error(err)
          return
      }
      console.log('File has been created')
  })

  let endTime = new Date().getTime()
  console.log(`Execution time: ${endTime - startTime} ms`)

}

main()

