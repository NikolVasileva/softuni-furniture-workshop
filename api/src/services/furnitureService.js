import Furniture from "../models/Furniture.js"

export default {
    getAll() {
        return Furniture.find().select({
            description: true,
            price: true,
            img: true
        })
    },
    getOne(furniteId) {
        return Furniture.findById(furniteId)
    },
    create(furnitureData, ownerId) {
        return Furniture.create({
            ...furnitureData,
            _ownerId: ownerId
        })
    }
}