import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import querystring from 'querystring';
import { getErrorMessage } from '../utils/errorUtils.js';

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const query = req.query.where?.replaceAll('"', '');

    let filter = {};
    if (query) {
        filter = querystring.parse(query)
    }

    const furnitures = await furnitureService.getAll(filter);

    res.json(furnitures ?? []);
});

furnitureController.get("/:furniteId", async (req, res) => {
    const furnitureId = req.params.furniteId;

    const furniture = await furnitureService.getOne(furnitureId);

    return res.json(furniture)
})

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const owerId = req.user.id;

    try {
        const furniture = await furnitureService.create(furnitureData, owerId);

        res.status(201).json(furniture);
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) });
    }

});

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
    const userId = req.user.id;

    try {
        const furniture = await furnitureService.delete(furniterId, userId);
        res.json(furniture);

    } catch(err) {

    }
})

export default furnitureController;
