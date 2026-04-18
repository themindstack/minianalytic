import * as process from "node:process";
import { logger } from "~services/logger";
import { appFactory } from "./app.factory";
import { routes } from "./routes";
import { clickhouseService } from "~services/clickhouse.service";

(async function main() {
  await clickhouseService.boot();

  const app = appFactory.createApp();

  app.post("/collect", ...routes.collect);

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

import { createClient } from "@clickhouse/client";

const client = createClient({
  url: "http://localhost:8123",
  username: "default",
  password: "",
  // database: 'default', // optional
});

// Test the connection
const result = await client.query({
  query: "SELECT version()",
  format: "JSONEachRow",
});

console.log(await result.json());

await client.close();
