import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
    const token = req.header("X-Authorization");

    if(!token) {
        return next()
    }

    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodeToken;

        next();

    } catch(err) {
        res.status(401).json({message: "Invalid user session!"})
    }
}