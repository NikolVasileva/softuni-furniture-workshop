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
    },
    update(furniterId, furnitureData) {
        return Furniture.findByIdAndUpdate(furniterId, furnitureData, { runValidators: true })
    },
    delete(furniterId, userId) {
        // return Furniture.findByIdAndDelete(furniterId)

        return Furniture.deleteOne({ id: furniterId, _ownerId: userId })
    }
}