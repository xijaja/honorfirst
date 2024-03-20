import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { user } from "./apis";

// 创建 Hono 应用
const app = new Hono();

// 使用子路由
app.route("/user", user);

// 注册根路由
app.get("/", (c) => {
  return c.text("Hello Hono! 你好！");
});

// 启动服务，监听 3000 端口
serve({ port: 3000, fetch: app.fetch }, () => {
  console.log(`Server is running on http://localhost:3000`);
});
