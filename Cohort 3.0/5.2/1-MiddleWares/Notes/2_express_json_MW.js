

// here are some common middlewares in which express.json() is one which use to parse incoming "body" json data request (currently we send this through postman body using post )

const express = require("express");

const app = express();

app.use(express.json());
app.post('/route1', (req, res) => {

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({ mssg: a + b });

});

app.listen(3000); 