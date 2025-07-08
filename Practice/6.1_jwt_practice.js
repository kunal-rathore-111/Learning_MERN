

// signup -> signin genreate token -> show info on /me

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwt_secret = "somethingsecret";

let users = [];

app.use(express.json());

app.post("/signup", function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    users = [...users, { username: username, password: password }];

    res.json({ mssg: "Signup successfull" });

})

app.post("/signin", function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    // if the username or password correct then generate token

    findUser = users.find(function (u) {
        return (u.username == username && u.password == password);
    })

    if (findUser) {
        const token = jwt.sign({ username: username }, jwt_secret);
        res.json({ token: token });
    }
    else {
        res.status(404).json({ Mssg: "Wrong username or password" });
    }

})

app.get("/me", function (req, res) {

    const token = req.headers.token;

    const decodeToken = jwt.verify(token, jwt_secret);

    const username_From_decodeToken = decodeToken.username;

    const FindUser = users.find(function (u) {
        return (u.username == username_From_decodeToken);
    })


    res.json({
        username: FindUser.username,
        password: FindUser.password,
    })


})

app.listen(3000);
