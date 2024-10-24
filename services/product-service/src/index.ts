import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";

async function startServer() {
  const app: Application = express();
  const port = process.env.PORT || 8080;
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Application routing
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ data: "HI there" });
  });

  app.listen(port, () => console.log(`Server is listening on port ${port}!`));

  process.on("unhandledRejection", (err: any) => {
    console.log(err);
  });

  process.on("uncaughtException", (err: any) => {
    console.log(err.message);
  });
}

startServer();
