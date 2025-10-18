import express from "express";
import cors from "cors"
import routes from "./routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import { authMiddleware } from "./middlewares/authMiddleware.js";


const app = express();

// Setup mongoose
try {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "furniture-workshop"
    });

    console.log("Successfully connected to DB!")

} catch(err) {
    console.log("Cannot connect to DB!");
    console.log(err.message)
}

// Add CORS
app.use(cors())

// Add JSON Parser
app.use(express.json())

// Add auth middleware
app.use(authMiddleware)

// Add routes
app.use(routes)

app.listen(3030, () => "Server is listening to http://localhost:3030...")