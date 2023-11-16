import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();
app.disable("X-powered-by");

export const startServer = (port: number) => {
  app.listen(port, "Localhost", () => {
    console.log(chalk.green(`Listening on http:localhost:${chalk.blue(port)}`));
  });
};

export default app;
