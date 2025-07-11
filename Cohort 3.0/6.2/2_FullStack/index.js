


//Backend
const express = require("express");

const app = express();

const jwt = require("jsonwebtoken");

const jwt_secret = "ewsdt45234";

let users = [];

function auth(req, res, next) {

    const token = req.headers.token;

    const DecodeToken = jwt.verify(token, jwt_secret);
    const usernameFromDecodeToken = DecodeToken.username;
    const isExists = users.find((u) => { return (u.username == usernameFromDecodeToken) });

    if (isExists) {
        req.username = isExists.username;
        req.password = isExists.password;   // pass the variables with values to the methd "/me"
        next();
    }
    else {
        res.json({ mssg: "Please log in with correct token" });
    }

}


app.use(express.json());

function checkMethod(req, res, next) {
    console.log(`${req.method} is called from ${req.url}`);
    next();
}

app.use(checkMethod);


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})


app.post("/signup", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    users = [...users, { username: username, password: password }];

    res.json({ mssg: "Signup successfull" });

})

app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const findUser = users.find((u) => { return (u.username == username && u.password == password) });

    if (findUser) {
        let token = jwt.sign({ username }, jwt_secret);
        res.header("token", token);
        res.json({ mssg: "Check respond headers" });
    }
    else { res.json({ mssg: "Wrong username or password" }); }

});



app.get("/me", auth, (req, res) => {

    res.json({ username: req.username, password: req.password });

})

app.listen(3000);