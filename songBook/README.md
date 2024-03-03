# songBook is built with node

"npm run build" creates $lib/data/songs.json

## Python scripts used to fetch data from Contentful and to populate the Wordpress database

These were used to get the old "songs" (manually downloaded json) and "biisit" from Contentful, combine them to one, and post them all to Wordpress

* getLyricsFromContentful.py
* combineContentfulLyricFiles.py
* postLyricsToWordpress.py

This was used to create songs.json in the beginning but has since been replaced by the js-file.
* createLyricsJson.py

