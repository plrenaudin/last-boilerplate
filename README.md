# Last boilerplate (WIP)

## How to install

```
npx degit plrenaudin/last-boilerplate myAwesomeProject
cd myAwesomeProject
npm i
npm run dev
```

## Tools

- Svelte
- Prettier
- Eslint
- Rollup
- Tailwindcss
- Jest
- Now (zeit.co/now)

## Developper experience first

- Staged code linted and formatted on commit (husky pre-commit + lint staged)
  - For svelte files too (thanks to eslint-plugin-svelte3 and prettier-plugin-svelte)
- Most of the config in one place (package.json)
- Focus on code (reduced as much noise as possible)
  - Frontend code located in the `/src` folder
  - API code located in the `/api` folder

## VSCode

For improved developer experience, install Svelte (jamesbirtles.svelte-vscode) and Prettier (esbenp.prettier-vscode) Extensions

## TODO

- API / backend
