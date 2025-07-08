


const express = require("express");

const app = express();

const jwt = require("jsonwebtoken");

const jwt_secret = "ewsdt45234";

let users = [];

app.use(express.json());

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
    else { res.status(404).json({ mssg: "Wrong username or password" }); }

});


app.get("/me", (req, res) => {

    const token = req.headers.token;

    const DecodeToken = jwt.verify(token, jwt_secret);
    const usernameFromDecodeToken = DecodeToken.username;

    const isExists = users.find((u) => { return (u.username == usernameFromDecodeToken) });

    if (isExists) {
        res.json({ username: isExists.username, password: isExists.password });
    }

    res.status(404).json({ mssg: "Wrong Token" });

})

app.listen(3000);