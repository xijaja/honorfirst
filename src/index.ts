import { Hono } from "hono";
import { logger } from "hono/logger";
import user from "./apis/user";

const app = new Hono();
app.use(logger());
app.route("/user", user);

app.get("/", (c) => {
  return c.text("Hello Hono 你好!");
});

export default app;
