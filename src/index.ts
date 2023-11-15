import express from "express";
import app from "./app.js";
import morgan from "morgan";
import pingRouter from "./works/routes/pingRouter.js";

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingRouter);
