# HybridiSpeksi 2024 website frontend

## Developing

For developing the site you need to first install git and node.js for your system

1. clone the project with `git clone [url]`

2. Install npm dependecies with `npm install` (or `pnpm install` or `yarn`)

3. .env.local and development server:

Check env.local.example for a template. Then start the development server with:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## SongBook

The are some python scripts for updating the songbook in /songBook. Songs and lyrics from the wordpress backend won't automatically update to the frontend.