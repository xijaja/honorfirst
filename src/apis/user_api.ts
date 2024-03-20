import { Hono } from "hono";
import { Bad, Oka, reveal } from "../code/codes";

// 创建 Hono 应用
const user = new Hono();

user.get("/list", (c) => {
  return c.json(reveal(Bad, { msg: "Bad one", users: [] }));
});

user.get("/list2", (c) => {
  return c.json(
    reveal(Oka, { msg: "nice one!", users: ["Alice", "Bob", "Charlie"] })
  );
});

export { user };
