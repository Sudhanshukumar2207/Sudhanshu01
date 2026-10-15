# Sudhanshu Kumar — Portfolio

A responsive personal portfolio built with React, Vite, and CSS.

## Run the website locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open a terminal in this project folder.
3. Install the project dependencies:

   ```sh
   npm install
   ```

4. Start the local development server:

   ```sh
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

The page refreshes automatically when you save a change.

## Edit the content

- `src/App.jsx` contains the portfolio text, skills, education, navigation, and contact links.
- `src/App.css` contains the page layout, colors, and responsive styles.
- `src/index.css` contains global styles and typography.
- `index.html` contains the browser tab title and search description.

The contact buttons open the visitor's email or phone application. They do not submit to a website backend.

## Check a production build

Run:

```sh
npm run build
```

Vite writes the optimized website to `dist/`. To preview that build locally, run `npm run preview`.

## Upload to GitHub

1. Create a new, empty repository on GitHub.
2. Open a terminal in this project folder and run:

   ```sh
   git init
   git add .
   git commit -m "Build personal portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

Replace the remote URL with the URL of your repository. The `.gitignore` file excludes generated dependencies and build output as well as local environment files.

## Publish on GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever changes are pushed to `main`.

1. On GitHub, open **Settings → Pages** for this repository.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.
4. Visit <https://sudhanshukumar2207.github.io/Sudhanshu01/>.

The site uses the repository path in its Vite configuration so its assets, including the profile photo, resolve correctly on GitHub Pages. Every push to `main` starts a fresh deployment; after changing the Pages source, check that the newest workflow run finishes successfully.

## Deploy with Vercel

After uploading to GitHub, import the repository in Vercel. Vercel detects Vite automatically; the build command is `npm run build` and the output directory is `dist`. Review the content before publishing, especially the public email address and phone number.
