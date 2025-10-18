import express from "express";
import cors from "cors"
import routes from "./routes.js";


const app = express();

// Add CORS
app.use(cors())

// Add JSON Parser
app.use(express.json())

// Add routes
app.use(routes)

app.listen(3030, () => "Server is listening to http://localhost:3030...")