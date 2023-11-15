import express from "express";
import app from "./app.js";
import morgan from "morgan";
import pingRouter from "./works/routes/pingRouter.js";
import { connectToDatabase } from "./database/index.js";

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingRouter);

const mongoDatabase = process.env.MONGODB_URL;

await connectToDatabase(mongoDatabase!);
