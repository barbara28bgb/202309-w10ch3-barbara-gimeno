import { Router } from "express";
import PingController from "../../features/ping/pingController/pingController.js";

const pingRouter = Router();

const pingController = new PingController();

pingRouter.use("/", pingController.getPong);

export default pingRouter;
