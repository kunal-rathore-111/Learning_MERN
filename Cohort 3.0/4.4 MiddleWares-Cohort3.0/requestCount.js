

const express = require("express");

const app = express();

app.use(express.json());

let totalReq = 0;

// middleware
function countReq(req, res, next) {
    totalReq += 1;
    next();
}

app.use(countReq);


app.get("/user1", function (req, res) {
    res.status(200).json({ mssg: "user1" });
})


app.get("/user2", function (req, res) {
    res.status(200).json({ mssg: "user2" });
})


app.get("/user3", function (req, res) {
    res.status(200).json({ mssg: "user3" });
})


app.get("/reqCount", function (req, res) {
    res.status(200).json({ no_of_req: `${totalReq}` });
})


app.listen(3000);