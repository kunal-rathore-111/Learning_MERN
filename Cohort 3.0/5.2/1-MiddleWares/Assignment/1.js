

// Create  a middleware function which logs the each coming request's -
// 1) method, 2) url, 3) timestamp to console


const express = require("express");

const app = express();

function mWfunction(req, res, next) {

    console.log(`Method is- ${req.method}`);
    console.log(`Host name- ${req.hostname}`);
    console.log(`Route is- ${req.url}`);
    console.log(`Time is- ${new Date()}`);
    next();
}

app.get("/hi1", mWfunction, (req, res) => {
    res.json({ mssg: "HI1" });
});
app.get("/hi2", mWfunction, (req, res) => {
    res.json({ mssg: "HI2" });
});
app.get("/hi3", mWfunction, (req, res) => {
    res.json({ mssg: "HI3" });
});

app.listen(3000);