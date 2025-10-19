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
    const ownerId = req.user.id;

    const furniture = await furnitureService.create(furnitureData, ownerId);

    res.status(201).json(furniture, ownerId);
})

furnitureController.put("/:furnitureId", async (req, res) => {
    const furniterId = req.params.furnitureId;
    const furnitureData = req.body;

    try {
        const furniture = await furnitureService.update(furniterId, furnitureData);

        res.json(furniture);

    } catch(err) {

    }

})

furnitureController.delete("/:furnitureId", async (req, res) => {
    const furniterId = req.params.furnitureId;

    try {
        const furniture = await furnitureService.delete(furniterId);
        res.json(furniture);

    } catch(err) {

    }
})

export default furnitureController;
