import express from "express";
import app from "./app.js";
import morgan from "morgan";
import pingRouter from "../features/ping/router/pingRouter.js";

app.use(express.json());
app.use(morgan("dev"));
app.use("/", pingRouter);
