

const express = require("express");
const mongoose = require("mongoose");
const { usersModel, todosModel } = require("./db.js");
const { signinAuth, auth } = require("./auth.js");

mongoose.connect("mongodb+srv://kunaldell01:123@cluster0.0qgphf9.mongodb.net/todo-1");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const email = req.body.email, userName = req.body.userName, password = req.body.password;

    //db call to create user
    await usersModel.create({
        email: email,
        userName: userName,
        password: password
    });
    res.json({ mssg: "Signup successfull" });
});


app.post("/signin", signinAuth, (req, res) => {
    res.json({ mssg: "Signin successfull" });
});


app.post("/addTodo", auth, (req, res) => {
    //add todo in db
    const title = req.body.title, isDone = req.body.isDone;

    todosModel.create({
        title: title,
        isDone: isDone,
        userId: req.userId
    });
    res.json({ mssg: "todo added" });
})


// get all todos
app.get("/getTodo", auth, async (req, res) => {

    const todos = await todosModel.find({
        userId: req.userId  // req.userId from the above auth function which decodes the token
    });

    res.json({ mssg: todos });
});


app.listen(3000);