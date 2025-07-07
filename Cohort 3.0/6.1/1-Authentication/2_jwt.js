

// Tokens vs JWT


/* 
        JWT -> Json Web Token

        here in 1_token_auth.js we create a token manually in a variable which is not effiecient cause we need to send request to dB everytime for the token and that was stateful means need to store

        while, JWT is used to convert (encode) our some input like username into token so it reduce the dB requests,

        Now

        JWT are not for encription that was only it one usecase
        they are stateless means store automatically
*/




const express = require("express");

const jwt = require("jsonwebtoken");

const JWT_Secret = "somethingIsGood";

const app = express();

app.use(express.json());

let users = []; // array to store usernames and passwords


app.post("/signup", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    users = [...users, { username: username, password: password }]

    res.json({ mssg: "Registration Done" });

    console.log(users);

});



app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function (u) {
        return (u.username == username && u.password == password);   // it returns true when the pass and username match with the data stored in users global variable
    });

    if (user) {
        const token = jwt.sign({ username: user.username }, JWT_Secret);  // it encodes the username and storens in token
        res.json({ token: token });
    }

    else { res.status(404).send({ mssg: "Wrong username or password" }) }

    console.log(users);

});

app.get("/me", (req, res) => {
    const token = req.headers.token;

    const decodeToken = jwt.verify(token, JWT_Secret); // it returns object with the thing(variable) I passed while encoding in signin request
    const usernameFromdecodeToken = decodeToken.username;

    console.log(usernameFromdecodeToken);

    const findUserByUserName = users.find(function (u) { return (u.username == usernameFromdecodeToken) })

    if (findUserByUserName) {
        res.json({ username: findUserByUserName.username, password: findUserByUserName.password })
    }
    else { res.status(404).json({ mssg: "Incorrect token" }) }
})

app.listen(3000);