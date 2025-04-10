# Ginetta BeCoding
A monorepo for a simple app for discovering GitHub users and their public repositories.

It's a play on the "BeReal" app by serving a similar purpose, but for coders, by showing the repositories they last updated.


## Development

```bash
# Frontend  
cd apps/web
pnpm install
pnpm dev
```

```bash
# Backend
cd apps/api
pnpm install
pnpm dev
```


## Docker

```bash
# Create the .env file and add your GitHub token to it
cp .env.example .env

# Create the app_network if it doesn't exist
docker network create app_network

# Build and start the containers
docker compose up -d --build
```


# Frontend
 
[`@ginetta-becoding/web`](./apps/web) is a Vite React app (under http://localhost:5173). It's unfinished and only shows a plain landing page.


# Backend

[`@ginetta-becoding/api`](./apps/api) is a Fastify API backend (under http://localhost:3001) that allows for searching GitHub users and fetching information about their repositories.



# Extras
### What I liked
- I liked trying out Fastify for the first time. It's widely seen as the successor to Express. I could have use Next.js for a full stack setup, but I wanted to try something different.

### What I didn't like
- I didn't like debugging this project and its scaffolding. I get better each time, but a monorepo, with Docker and various TypeScript tools, CommonJS, ES Modules etc. often tends to get unwieldy.

### If I had more time (1 extra day)
- I would have finished up the frontend app, and overall just cleaned up the codebase a bit more.


### If I would start from scratch
- I would have used Next.js for the frontend and backend for simplicity sake (no need for a monorepo). But it was nice to try out Fastify.
