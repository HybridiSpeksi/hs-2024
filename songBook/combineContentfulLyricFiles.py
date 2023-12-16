import json
import random

prods = {
    2014: "HybridiSpeksi",
    2015: "H.A.L.I",
    2016: "BratvaKontra",
    2017: "Kruunun kohtalo - Kalevalan perintö",
    2018: "Älä ammu ohi",
    2019: "Viimeinen lohikäärmeisku",
    2020: "2101: Avaruusristeily",
    2021: "Inferno: kun speksiä saa odottaa",
    2022: "Inferno: kunnes Kadotus meidät korjaa",
    2023: "Kreivin aikaan",
    2024: "Kevätpäivänseisaus"
}

types = {
    "Pääbiisi": 0,
    "1. Omstart": 1,
    "2. Omstart": 2
}

with open("songBook/contentfulBiisit.json", "r", encoding="utf8") as file:
    lyricsFile1 = json.load(file)
with open("songBook/contentfulSongs.json", "r", encoding="utf8") as file:
    lyricsFile2 = json.load(file)

newJson = {"songs": []}

for i, song in enumerate(lyricsFile1["songs"]):
    newJson["songs"].append({
        "id": i,
        "title": song["title"],
        "year": int(song["year"]),
        "production": song["production"],
        "scene": int(song["scene"]),
        "type": song["type"],
        "original_artist": song["original_artist"],
        "original_song": song["original_song"],
        "lyrics": song["lyrics"],
    })

for j, songO in enumerate(lyricsFile2.items()):
    song = songO[1]

    artistSong = song["origin"].split(" - ")
    oldSong = artistSong[0]
    artist = artistSong[1] if len(artistSong) > 1 else "Unknown"

    newJson["songs"].append({
        "id": i + j,
        "title": song["title"],
        "year": int(song["year"]),
        "production": song["production"] if "production" in song else prods[int(song["year"])],
        "scene": int(song["scene"] if "scene" in song else random.randint(1, 10)),
        "type": song["type"] if "type" in song else "Pääbiisi" if j % 3 == 0 else "1. Omstart" if j % 3 == 1 else "2. Omstart",
        "original_artist": artist,
        "original_song": oldSong,
        "lyrics": song["lyrics"] if "lyrics" in song else song["lines"]
    })

newJson["songs"].sort(key=lambda x: (x["year"], x["scene"], types[x["type"]]))

jsonObject = json.dumps(newJson, indent=4)
with open("songBook/cont_lyrics.json", "w") as outfile:
    outfile.write(jsonObject)

