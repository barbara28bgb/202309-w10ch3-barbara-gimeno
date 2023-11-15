import "dotenv/config";
import express from "express";

const app = express();

const port = process.env.PORT ?? 2808;

app.listen(port);
