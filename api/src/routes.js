import { Router } from "express";
import furnitureController from "./controller/furnitureController.js";
import userController from "./controller/userController.js";

const routes = Router();

routes.use("/data/catalog", furnitureController)
routes.use("/users", userController)

export default routes;