import { Hono } from "hono";
import { Oka, reveal } from "../code/codes";

const user = new Hono();

user.get("/list", (c) => {
  return c.json(
    reveal(Oka, {
      list: ["a", "b", "c"],
    })
  );
});

user.get("/:user_id", (c) => {
  const user_id = c.req.param("user_id");
  return c.json(
    reveal(Oka, {
      user_id,
    })
  );
});

export default user;
