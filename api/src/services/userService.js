import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generetaAuthToken } from "../utils/tokenUtils.js";

export default {
    async register(email, password) {
        const user = await User.create({ email, password});

        const token = generetaAuthToken(user)

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        }
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

        const token = generetaAuthToken(user)

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        }
    }
}