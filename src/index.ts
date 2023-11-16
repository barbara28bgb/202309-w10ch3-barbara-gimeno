import chalk from "chalk";
import { connectToDatabase } from "./database";
import { startServer } from "./server/app";

const port = process.env.PORT ?? 2808;

if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Not connection with MongoDB"));
  process.exit();
}

export const mongoDatabase = process.env.MONGODB_URL;

await connectToDatabase(mongoDatabase);
startServer(+port);
