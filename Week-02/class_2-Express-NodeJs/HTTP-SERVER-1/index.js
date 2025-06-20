// npx nodemon index.js (for auto restart terminal on saving changes)

// we use libraries to create http server using express library

/*
const express = require("express");  // it imports the express library  (to import this we need to npm install express using terminal)

const app = express(); // express is a function

const port = 3000;

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(port); */


//2nd  -> creating one http server with one port and two routes


/* const express = require("express");

const app = express();

const port = 3000;

app.get('/route1/', function (req, res) {
    res.json({

        name: 'Kunal',
        age: 12,
        date: new Date().getDate(),
    });
});



app.get('/route2/', function (req, res) {
    res.send("<b>Kunal route2</b>");
})

app.listen(port); */



// 3rd .post and get body 

// to get body we need a different library called body-parser (npm install body-parser)

/* const express = require("express");
const bodyparser = require("body-parser");

const port = 3000;

const app = express();

app.use(bodyparser.json());   // body is the user sentence

app.get('/newPort/', function (req, res) {
    // middlewares
    console.log(req.body);
    res.send("hi");
});

app.listen(port); */


// export PORT (eg-> export PORT=3006)

/* const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;


const bodyparser = require("body-parser")
app.use(bodyparser.json());   // to play with body

app.post('/route/', function (req, res) {
    res.send("hi");

    const mssg = req.body.mssg;
    console.log(mssg);
})
    

app.listen(PORT, function () { console.log(`Running on PORT ${PORT}`) });
*/




// passing body using query
/* 
const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;


const bodyparser = require("body-parser")
app.use(bodyparser.json());   // to play with body

app.post('/route/', function (req, res) {
    res.send("hi");

    const mssg = req.query.mssg; // pass message with url like -> localhost:3000/route?mssg=kunal
    console.log(mssg);
})

app.listen(       //starts the http server
    PORT, function () { console.log(`Running on PORT ${PORT}`) }); */





// STATUS CODE

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.status(401).send("hi check status code");
});

app.listen(PORT, function () { console.log(`running on ${PORT}`); });