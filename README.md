# Last boilerplate (WIP)

## How to install

```
npx degit plrenaudin/last-boilerplate myAwesomeProject
cd myAwesomeProject
npm i
npm run dev
```

Then in another terminal run `vc dev` for Vercel support

## Tooling

- **Coding**: Svelte
- **Formatting**: Prettier
- **Linting**: Eslint
- **Bundling**: Rollup
- **Styling**: Tailwindcss
- **Testing**: Jest
- **Deploying**: Now (Zeit)

## Developper experience first

- Staged code **linted** and **formatted** on commit (husky pre-commit + lint staged)
  - For _svelte_ files too (thanks to eslint-plugin-svelte3 and prettier-plugin-svelte)
- Most of the **config in one place** (package.json)
- Focus on code (reduced as much noise as possible)
  - **Frontend** code located in the `/src` folder
  - **API** code located in the `/api` folder

## VSCode

For improved developer experience, install _Svelte_ (jamesbirtles.svelte-vscode) and _Prettier_ (esbenp.prettier-vscode) Extensions
