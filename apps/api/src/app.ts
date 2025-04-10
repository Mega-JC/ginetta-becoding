import path from "node:path";
import AutoLoad from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";

// Pass --options via CLI arguments in command to enable these options.
const options: Record<string, unknown> = {};

const app: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // Place your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};

export default app;
export { options };
