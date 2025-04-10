import { FastifyPluginAsync } from "fastify";

var Octokit: typeof import("@octokit/core").Octokit;
// Dynamic import for Octokit to deal with ES module compatibility issues
const getOctokit = async (): Promise<typeof Octokit> => {
  if (Octokit) return Octokit;
  const { Octokit: _Octokit } = await import("@octokit/core");
  Octokit = _Octokit;
  return Octokit;
};

const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // proxy to fetch GitHub users
  fastify.get("/users", {
    schema: {
      querystring: {
        type: "object",
        properties: {
          q: { type: "string" },
          page: { type: "number" },
        },
      },
    },
    config: {
      description: "Get all users",
    },
  }, async function (request, reply) {

    const octokit = new (await getOctokit())({
      auth: process.env.GITHUB_TOKEN,
    });

    const response = await octokit.request("GET /search/users", {
      q: (request.query as { q: string }).q ?? "",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      page: (request.query as { page: number }).page ?? 1,
      per_page: 10,
    });

    for (const user of response.data.items) {
      const repos = await octokit.request("GET /users/{username}/repos", {
        username: user.login,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
        sort: "updated",
        direction: "desc",
        per_page: 5
      });
      
      // Add recent repos to the user object
      // @ts-ignore
      user.recent_repos = repos.data;
    }

    
    return reply.status(200).send(response.data);
  });

  // proxy to fetch GitHub repos of a user
  fastify.get("/users/:username/repos", {
    schema: {
      params: {
        type: "object",
        properties: {
          username: { type: "string" },
        },
      },
      querystring: {
        type: "object",
        properties: {
          page: { type: "number" },
        },
      },
    },
    config: {
      description: "Get all public repos for a user",
    },
  }, async function (request, reply) {
    const octokit = new (await getOctokit())({
      auth: process.env.GITHUB_TOKEN,
    });


    const response = await octokit.request("GET /users/{username}/repos", {
      username: (request.params as { username: string }).username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      sort: "updated",
      direction: "desc",
      page: (request.query as { page: number }).page ?? 1
    });

    return reply.status(200).send(response.data);
  });
};

export default users;
