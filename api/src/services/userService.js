import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
    register(email, password) {
        return User.create({email, password})
    },
    async login(email, password) {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error("Invalid email or password")
        }

        const invalid = await bcrypt.compare(password, user.password);

        if(!invalid) {
            throw new Error("Invalid email or password");
        }

        // Generate token
        const payload = {
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" })

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        }
    }
}