import fp from "fastify-plugin";
import sensible, { FastifySensibleOptions } from "@fastify/sensible";
import { FastifyPluginAsync } from "fastify";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
const sensiblePlugin: FastifyPluginAsync = async (fastify, opts) => {
  void fastify.register(sensible, {
    errorHandler: false,
  } as FastifySensibleOptions);
};

export default fp(sensiblePlugin);
