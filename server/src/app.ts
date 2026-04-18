import * as process from "node:process";
import { logger } from "~services/logger";
import { appFactory } from "./app.factory";
import { routes } from "./routes";

(async function main() {
  const app = appFactory.createApp();

  app.post("/collect/v0", ...routes.collect);

  const server = Bun.serve({
    port: process.env.NODE_ENV,
    fetch: app.fetch,
  });

  return {
    server,
  };
})()
  .then(({ server }) => {
    logger.info(`Server is running at ${server.url}`);
  })
  .catch((error) => {
    logger.error("Failed to boot server up", error);
  });
