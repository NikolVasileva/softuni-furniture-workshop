import express from "express";


const app = express()

app.get("/", (req, res) => {
    res.send("it works")
})

app.listen(3030, () => "Server is listening to http://localhost:3030...")