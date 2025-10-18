import User from "../models/User.js";
import bcrypt from "bcrypt"

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
        return user
    }
}