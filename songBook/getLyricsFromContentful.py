import requests
import json
import os
import random
from dotenv import load_dotenv  #python-dotenv

load_dotenv('../.env.local')


# Only Biisit collection is fetched from Contentful
# Songs collection was imported manually from Contentful as JSON
query = """query {
	 biisiCollection {
		items {
			nimi
			vuosi
			origin
			sanat {json 
				}
		}
	}
}
"""

response = requests.post(
    os.getenv('CONTENTFUL_API_URL') + os.getenv('CONTENTFUL_SPACE_ID'),
    json={'query': query},
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + os.getenv('CONTENTFUL_ACCESS_TOKEN')
    }
)

# print(response)

if response.status_code == 200:
    data = response.json()
    jsonData = {}
    # print(data)
    jsonData["songs"] = []

    for i, song in enumerate(data["data"]["biisiCollection"]["items"]):
        if song["vuosi"] != 2023: continue
        jsonData["songs"].append({
            "id": i,
            "title": song["nimi"],
            "year": song["vuosi"],
            "production": "Kreivin aikaan",
            "scene": random.randint(1,10),
            "type": "Pääbiisi" if i % 3 == 0 else "1. Omstart" if i % 3 == 1 else "2. Omstart",
            "original_artist": song["origin"].split(" - ")[0],
            "original_song": song["origin"].split(" - ")[1],
            "lyrics": []
        })
        for block in song["sanat"]["json"]["content"]:
            for line in block["content"][0]["value"].split("\n"):
                jsonData["songs"][-1]["lyrics"].append(line)
            jsonData["songs"][-1]["lyrics"].append("")

    jsonObject = json.dumps(jsonData, indent=4)
    with open("contentfulBiisit.json", "w") as outfile:
        outfile.write(jsonObject)

