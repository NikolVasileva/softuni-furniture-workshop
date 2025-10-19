import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furnitures = await furnitureService.getAll();

    res.json(furnitures ?? []);
});

furnitureController.get("/:furniteId", async (req, res) => {
    const furnitureId = req.params.furniteId;

    const furniture = await furnitureService.getOne(furnitureId);

    return res.json(furniture)
})

furnitureController.post("/", async (req, res) => {
    const furnitureData = req.body;

    const furniture = await furnitureService.create(furnitureData);

    res.status(201).json(furniture);
})

export default furnitureController;
