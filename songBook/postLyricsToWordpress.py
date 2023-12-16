import json
import requests
import os

from dotenv import load_dotenv  #python-dotenv

load_dotenv('.env.local')

# Generate a token
response = requests.post(
    os.getenv('WORDPRESS_API_TOKEN_URL'),
    json={
        'username': os.getenv('WORDPRESS_USERNAME'),
        'password': os.getenv('WORDPRESS_PASSWORD')
    },
    headers={
        'Content-Type': 'application/json',
    }
)

token = None

if (response.status_code != 200):
    print(response)
    print(response.json())
else :
    token = response.json()['token']

if not token: 
    raise Exception('Token generation failed')

print('Token generated successfully')

# Load songs from json file
jsonFileName = 'songBook/cont_lyrics.json' 
with open(jsonFileName, 'r') as f:
    songs = json.load(f)

url = os.getenv('WORDPRESS_API_BASE_URL') + '/song'
headers = {
    "Content-type": "application/json",
    "Authorization": "Bearer " + token
}

def getProductionID(year):
    if year == 2015:
        return 26
    if year == 2016:
        return 27
    if year == 2017:
        return 123
    if year == 2018:
        return 125
    if year == 2019:
        return 126
    if year == 2020:
        return 127
    if year == 2022:
        return 128
    if year == 2023:
        return 129
    if year == 2024:
        return 130
    return None

def flattenLyricsJson(lyrics):
    return '\n'.join([line for line in lyrics])

for song in songs['songs']:
    json = {
        'title': song['title'],
        'status': 'publish',
        'acf': {
            "title": song['title'],
            "year": str(song['year']),
            "scene": song['scene'],
            "type": song['type'],
            "original_artist": song['original_artist'],
            "original_song": song['original_song'],
            "lyrics": flattenLyricsJson(song['lyrics']),
        }
    }
    # 'Meidän speksi' is a special case and it doesn't have a production
    if song['year'] != 2014:
        json['acf']["production"] = getProductionID(song['year'])

    response = requests.post(url, json=json, headers=headers)

    if (response.status_code != 201):
        print(response)
        print(response.json())
        quit()
    else :
        print('Song ' + song['title'] + ' sent successfully')

print('All songs sent successfully')