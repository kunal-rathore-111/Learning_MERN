
import express from "express";

const app = express();


app.get("/", (req, res) => {

    console.log("hi from http server");

    res.json({ message: "Hi from http server" });
})


app.listen(3001, () => {
    console.log("HTTP-server running on port 3001");
})