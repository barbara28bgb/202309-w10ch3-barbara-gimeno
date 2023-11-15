import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();

const port = process.env.PORT ?? 2808;

app.listen(port, () => {
  console.log(chalk.green(`Listening on http:localhost:${chalk.blue(port)}`));
});

export default app;
