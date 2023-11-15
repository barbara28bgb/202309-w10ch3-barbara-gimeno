import "dotenv/config";
import express from "express";
import chalk from "chalk";
import morgan from "morgan";

const app = express();

const port = process.env.PORT ?? 2808;
app.use(morgan("dev"));

app.listen(+port, "Localhost", () => {
  console.log(chalk.green(`Listening on http:localhost:${chalk.blue(port)}`));
});

export default app;
