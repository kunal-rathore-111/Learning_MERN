

// create an http server having 4 routes to make calculator

const express = require("express");

const app = express();

app.get("/multiply/:a/:b", (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ answer: a * b });

})

app.get("/add/:a/:b", (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ answer: a + b });

})

app.get("/subtract/:a/:b", (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ answer: a - b });

})


app.get("/divide/:a/:b", (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ answer: a / b });

})


app.listen(3000);   