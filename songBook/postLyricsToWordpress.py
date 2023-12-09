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

if (response.status_code != 200):
    print(response)
    print(response.json())
else :
    token = response.json()['token']
    print(token)