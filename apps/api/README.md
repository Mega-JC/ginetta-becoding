# @ginetta-becoding/api

This is the API backend for the Ginetta BeCoding project. It is a Fastify application that proxies requests to the GitHub API for discovering users and their public repositories.

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
```


## Routes

- `GET /users?q=search_query&page=page_number` - Search for users on GitHub
- `GET /users/:username/repos?page=page_number` - Get user repositories









