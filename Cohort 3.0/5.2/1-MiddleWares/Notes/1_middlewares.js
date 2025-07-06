

const express = require("express");

const app = express();

let requestCount = 0;

function middleWare(req, res, next) {
    requestCount += 1;
    console.log(`Request no- ${requestCount}`);
    if (requestCount >= 5) {
        res.send("no more request access, Rerun the server");
    }
    next();
}


app.get("/multiply/:a/:b", middleWare, (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ answer: a * b });

})


app.get("/divide/:a/:b", middleWare, (req, res) => {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ answer: a / b });

})


app.listen(3000);   