# HybridiSpeksi 2024 website frontend

Here you can find instructions on setting up the development environment, building and deploying the website. If you get stuck just remember google exists. 

## Developing

1. Install [Node.js](https://nodejs.org/en/download/current) and [git](https://git-scm.com/downloads).
2. Open cmd.exe and navigate to wherever you want to clone the repository e.g. "C://Users/[yuo]/coding".
3. Clone the project there with `git clone [url]` and navigate into the new folder with `cd hs-2024`.
4. Install npm dependecies with `npm install`.
5. Create the .env.local with the correct values. (Copy the example, rename and set the real values)
6. Start the development server with `npm run dev -- --open`. Website will open to a new browser window.

## Building and deploying

1. Create a production version of the website with `npm run build`. Make sure everything works like it did in dev environment.
2. Commit `git commit -m "[message]"` and push git 

You can preview the production build with `npm run preview`.

## SongBook

The are some python scripts for updating the songbook in /songBook. Songs and lyrics from the wordpress backend won't automatically update to the frontend.