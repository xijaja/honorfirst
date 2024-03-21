import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import user from "./user";

export const config = {
  runtime: "edge",
};

// 创建 Hono 应用
const app = new Hono().basePath("/api");

// 使用日志中间件
app.use(logger());

// 注册用户路由
app.route("/user", user);

app.get("/", (c) => {
  return c.json({ message: "Hello Hono, 你好啊!" });
});

app.get("/hello", (c) => {
  return c.json({ message: "Hello the fucking world!" });
});

// 导出 Hono 应用
export default handle(app);
