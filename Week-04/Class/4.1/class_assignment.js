// backend for the assignment


const express = require("express");

const app = express();


const cors = require("cors");

app.use(cors());

app.get("/si", function (req, res) {

    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);

    let si = (p * r * t) / 100;
    let total = p + si;

    res.json({ total, si });
})


app.listen(3000);