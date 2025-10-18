import express from "express";
import cors from "cors"


const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("it works")
})

app.listen(3030, () => "Server is listening to http://localhost:3030...")