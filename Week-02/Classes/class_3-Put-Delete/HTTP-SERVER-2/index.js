const e = require("express");
const express = require("express");

const app = express();

var users = [{
    name: "John",
    kidneys: [{ healthy: false }, { healthy: true }]

}];


app.get('/', function (req, res) {
    // checking the no. of kidneys present 
    const kidneyss = users[0].kidneys;
    const noOfKidneys = users[0].kidneys.length;

    let noOfHealtyKidneys = 0;
    for (let i = 0; i < noOfKidneys; i++) {
        if (kidneyss[i].healthy) {
            noOfHealtyKidneys++;
        }
    }
    let noOfUNHealtyKidneys = noOfKidneys - noOfHealtyKidneys;

    res.json({ noOfKidneys, noOfHealtyKidneys, noOfUNHealtyKidneys });
});


app.use(express.json());

app.post('/', function (req, res) {
    // adding more kidneys
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({ healthy: isHealthy });

    res.json({ msg: "DONE!!" });
});


// replacing all kidneys as unhealthy
// also return 411 status if no healty kidneys
function checkHealtyKidneys() {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy == true) {
            return true;
        }
    }
    return false;
}

app.put('/', function (req, res) {
    if (checkHealtyKidneys()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = false;
        }

        res.json({ msg: "Done" }); // request ended
    }

    else {
        res.status(411).json({ mssg: "no heatlhy kidneys" });
    }

});


// remove all unhealthy kidneys
// also return 411 status if no unhealty kidneys

function checkUnhealtyKidneys() {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy == false) {
            return true;
        }
    }
    return false;
}


app.delete('/', function (req, res) {

    if (checkUnhealtyKidneys()) {

        let newKidneys = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {

                newKidneys.push({ healthy: true });
            }
        }

        users[0].kidneys = newKidneys;
        res.json({ msg: "done" });
    }

    else {
        res.status(411).json({ mssg: "no bad kidneys" });
    }

});


app.listen(3000);