import { Env } from "hono";
import { createFactory } from "hono/factory";

export const appFactory = createFactory<Env>();
