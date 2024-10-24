import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import { errorMiddleware } from "./api/middlewares/error-middleware";
import { requestMiddleware } from "./api/middlewares/request-logger";
import { getRoutes } from "./api/routes";
import { MemoryStore } from "./core/db/mem-store";
dotenv.config();

async function startServer() {
  const store = new MemoryStore();
  const app: Application = express();
  const port = process.env.PORT || 3000;
  const base: string = process.env.base_url ?? "";
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(requestMiddleware);
  // Application routing
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ data: "HI there" });
  });
  app.use(base, getRoutes({ store }));
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  app.use(errorMiddleware);
  process.on("unhandledRejection", (err: any) => {
    console.log(err);
  });

  process.on("uncaughtException", (err: any) => {
    console.log(err.message);
  });
}
startServer();
