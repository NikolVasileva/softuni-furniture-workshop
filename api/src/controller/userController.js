import { Router } from "express";

const userController = Router();

userController.post("/register", async (req, res) => {
    const { email, password } = req.body
    res.end()
})

export default userController