
## `"ui": "workspace:*"` in all the `package.json` means, get the ui package from the workspace(pnpm-workspace). It is actuall the pnpm-workspace that allows sharing packages between the applications and th eother packages in the monorepo. npm and yarn also have this workspaces idea, but they all have a bit different implementation

# Install any required library inside the `packages/ui` the apps or the components don't know that they will be using all these packages or libraries, but only the `AppShell` knows about it and it will take care of everything

### Added `"store": "workspace:*"` into `packages/ui/package.json` so it can be accessed by the other apps

#### Renaming the start script to dev, so running pnpm dev at a high level will start the dev scripts on all the apps, as NextJS apps have a dev script and not a start script 

#### ts-config => contains all the TS configurations for all the next apps that were craeted in boilerplate turborepo, but it also worksout well for the react apps too

#### Running `pnpm/npm install` after everychange made in package.json or tsconfig.json, rebuilds all the dependencies from the newly created react app movies, to get it ready for the monorepo and also make the linkage between the tsconfig and the movies app.

### `packages/ui/package.json` => `"dev": "tsc --watch --outDir dist" & "build": "tsc --outDir dist"` => these scripts are added as teh NextJS way of how the webpack is configured does not work with teh CRA's way. The CRA's way does not support building TS from external modules, so these 2 scripts are added to prebuild the TS in the library.                                                 

### After adding the scripts cd => packages/ui => pnpm build => creates index.d.ts, index.js....etc.                                     replace main: "index.js" & types: "index.d.ts" in /ui/package.json = this change => the app is not exporting TS or built version of TS, built typings woukd be available under `types: "index.d.ts"`. This furthermore makes sure that the apps do noy get to do the compilation of the code that are in the `/packages`.


# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
