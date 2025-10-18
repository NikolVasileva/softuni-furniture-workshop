import { Router } from "express";
import furnitureController from "./controller/furnitureController.js";

const routes = Router();

routes.use("/data/catalog", furnitureController)

export default routes;