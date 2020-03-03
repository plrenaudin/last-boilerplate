# Last boilerplate (WIP)

## How to install

```
npx degit plrenaudin/last-boilerplate myAwesomeProject
cd myAwesomeProject
npm i
npm run dev
```

## Tooling

- __Coding__: Svelte
- __Formatting__: Prettier
- __Linting__: Eslint
- __Bundling__: Rollup
- __Styling__: Tailwindcss
- __Testing__: Jest
- __Deploying__: Now (Zeit)

## Developper experience first

- Staged code __linted__ and __formatted__ on commit (husky pre-commit + lint staged)
  - For _svelte_ files too (thanks to eslint-plugin-svelte3 and prettier-plugin-svelte)
- Most of the __config in one place__ (package.json)
- Focus on code (reduced as much noise as possible)
  - __Frontend__ code located in the `/src` folder
  - __API__ code located in the `/api` folder

## VSCode

For improved developer experience, install _Svelte_ (jamesbirtles.svelte-vscode) and _Prettier_ (esbenp.prettier-vscode) Extensions
