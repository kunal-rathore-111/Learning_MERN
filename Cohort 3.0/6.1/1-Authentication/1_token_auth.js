


const express = require("express");

const app = express();

app.use(express.json());

let users = []; // array to store usernames and passwords


// generates a long random string
function generateRandomToken() {
    let token = "";

    const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // generating random token
    for (let i = 0; i < 32; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];  // here math.random generates a random no. bw 0 - 1 and chars.length multiply then the no we got will be converted from decimal to integer using math.floor
    }

    return token;
}


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
        const token = generateRandomToken();
        user.token = token;  // it will stores the token as token variable in the "users" array
        res.json({ token: token });
    }

    else { res.status(404).send({ mssg: "Wrong username or password" }) }

    console.log(users);

});

app.get("/me", (req, res) => {
    const token = req.headers.token;

    const findUserBytoken = users.find(function (u) {
        return (u.token == token);
    }) //hitting dB to match the token and store only that user in findUserBytoken

    if (findUserBytoken) {
        res.json({ username: findUserBytoken.username, password: findUserBytoken.password })
    }
    else { res.status(404).json({ mssg: "Incorrect token" }) }
})

app.listen(3000);