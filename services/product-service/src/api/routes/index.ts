import express from "express";
import { initProductRoute } from "./product.route";
import { MemoryStore } from "../../core/db/mem-store";

interface Route {
  store: MemoryStore;
}

export function getRoutes(route: Route): express.Router {
  const router = express.Router();
  const defaultRoutes = [
    {
      path: "/",
      route: initProductRoute(route.store),
    },
  ];

  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  return router;
}
