# Uta Music

## Project setup

### Requirements

Requires [node.js](https://nodejs.org) version `>=20.6.0`

Install `node.js` from your preferred package manager or use `nvm` to install correct version of node.js

```sh
nvm use
```

### Get project

Install [git](https://git-scm.com/) from your preferred package manager

```sh
git clone https://github.com/pekochan069/uta-music.git
cd ./uta-music
```

With [GitHub CLI](https://cli.github.com/)

```sh
gh repo clone pekochan069/uta-music
cd ./uta-music
```

### Install dependencies

This project uses `pnpm` to manage its dependencies

```sh
corepack prepare pnpm@latest --activate
pnpm i
```

### Postinstall

```sh
pnpm postinstall
```

### Environment variables

```text
DATABASE_HOST=
DATABASE_USERNAME=
DATABASE_PASSWORD=
```

### Build and run Uta Music

```sh
pnpm build
pnpm start
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm format` | Format source files with `prettier`                     |
| `pnpm lint` | Lint source files with `eslint`                     |
| `pnpm postinstall` | Command which should be run after `git clone`                     |
| `pnpm vercel` | Run [vercel](https://vercel.com/dashboard) CLI Tool |
| `pnpm db:generate` | Generate [Drizzle ORM] migration files |
| `pnpm db:pull` | Pull data from database |
| `pnpm db:push` | Push data to database |
| `pnpm db:studio` | Launch database studio for data managing |
