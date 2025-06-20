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


app.put('/', function (req, res) {
    // replacing all kidneys as unhealthy

    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = false;
    }

    res.json({ msg: "Done" }); // request ended

});


app.delete('/', function (req, res) {

    // remove all unhealthy kidneys
    let newKidneys = [];

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {

            newKidneys.push({ healthy: true });
        }
    }

    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });

});


app.listen(3000);