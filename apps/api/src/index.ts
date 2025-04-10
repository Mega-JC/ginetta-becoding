import Fastify from "fastify";
import app, { options } from "./app.js";

const server = Fastify({
  logger: true,
  ...options,
});

// Register application as plugin
server.register(app);

// Start listening
server.listen({ port: 3001, host: "0.0.0.0" }).catch((err) => {
  server.log.error(err);
  process.exit(1);
});
