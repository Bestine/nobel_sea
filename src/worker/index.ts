import { Hono } from "hono";

type Env = {
  // Define your bindings here, for example:
  // MY_KV: KVNamespace;
  // MY_SECRET: string;
};

const app = new Hono<{ Bindings: Env }>();

export default app;
