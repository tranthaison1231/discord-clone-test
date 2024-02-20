import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use("*", logger());

app.notFound((c) => c.json({ status: 404, message: "Not found" }, 404));

serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});
