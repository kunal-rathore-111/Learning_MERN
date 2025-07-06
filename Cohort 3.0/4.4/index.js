

const express = require("express");

const app = express();

app.use(express.json());


//middleware which returns boolean

function isOldEnoughMiddleWare(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.status(301).json({
            mssg: "SORRY YOU ARE UNABLE TO RIDE"
        })
    }
}


app.get("/ride1", isOldEnoughMiddleWare, function (req, res) {

    res.json({
        mssg: "YOU SUCCESSFULLY RIDDEN RIDE 1"

    })

})

// use of miidle ware function for all routes

app.use(isOldEnoughMiddleWare);

app.get("/ride2", function (req, res) {


    res.json({
        mssg: "YOU SUCCESSFULLY RIDDEN RIDE 2"
    })

})

app.listen(3000); 