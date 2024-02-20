import requests
import json
import os
from dotenv import load_dotenv  #python-dotenv

load_dotenv('../.env.local')

query = """query {
songs {
  edges {
    node {
      songFields {
        title
        lyrics
        year
        production {
          ... on SongFieldsProductionToContentNodeConnection {
            edges {
              node {
                ... on Production {
                  title
                  content
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
"""
quit("Do not run this script, it has not been updated to match the js script")
response = requests.post(os.getenv('VITE_PUBLIC_WORDPRESS_API_URL'), json={'query': query})
if response.status_code == 200:
    data = response.json()
    jsonData = {}
    jsonData["songs"] = []

    for song in data["data"]["songs"]["edges"]:
        jsonData["songs"].append({
            "title": song["node"]["songFields"]["title"],
            "year": song["node"]["songFields"]["year"],
            "lyrics": []
        })
        for line in song["node"]["songFields"]["lyrics"].split("\r\n"):
            jsonData["songs"][-1]["lyrics"].append(line)

    jsonObject = json.dumps(jsonData, indent=4)
    with open("../src/lyrics.json", "w") as outfile:
        outfile.write(jsonObject)

