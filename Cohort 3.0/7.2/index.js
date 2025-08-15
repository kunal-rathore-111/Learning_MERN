// 1-> Password hasing (bcrypt)
// 2-> Error handling (try catch)
// 3-> Input validation (zod)    assignment -> go through zod library and find how to check uppercase lowercase and all


const express = require("express");
const { signINauth, auth } = require("./auth.js");
const mongoose = require("mongoose");
const { usersModel, todosModel } = require("./db.js");

const bcrypt = require("bcrypt"); // importing bcrypt library
const { z } = require("zod"); //  importing zod library

mongoose.connect("mongodb+srv://kunaldell01:123@cluster0.0qgphf9.mongodb.net/todo-1");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {


    // zod->
    // defining zod schema
    const requiredStructure = z.object({
        username: z.string().min(3).max(80),
        password: z.string().min(3).max(80),
        email: z.email().min(5).max(60) // checks whether the email length bw 5 to 60 and valid email format
    });

    // using that structure to validate 
    const zodResponse = requiredStructure.safeParse(req.body);   // returns two things one is 'success' and 'error', here we can use .parse but it will 'throw' error unless giving as object as safeParse do 

    //then if not succedded then return
    if (!zodResponse.success) {
        res.json({
            message: "Invalid credentials",
            error: zodResponse.error // responsing the wrong thing 
        });
        return;
    }


    // error handling if there is any error like duplicate email or username etc.
    try {
        const username = req.body.username, password = req.body.password, email = req.body.email;

        const hashedPassword = await bcrypt.hash(password, 5); // hashing password using bcrypt, it will auto generate salt
        await usersModel.create({
            username: username,
            password: hashedPassword,
            email: email
        });
        res.json({ message: "Signup successfull" });

    } catch (error) {
        console.log(`${error} `);
        res.json({ message: "Error user already exists" })
    }
});

app.post("/signin", signINauth, async (req, res) => {

    res.json({ message: "Signin successfully" });
});

app.post("/addtodo", auth, async (req, res) => {
    try {
        const title = req.body.title, isDone = req.body.isDone;

        await todosModel.create({
            title: title,
            isDone: isDone,
            userId: req.userId
        })
        res.json({ message: "Todo added" });
    } catch (error) {
        res.json({ message: `${error}` })
    }
});


app.get("/gettodo", auth, async (req, res) => {

    try {
        const todos = await todosModel.find({
            userId: req.userId
        });
        res.json({ todos: todos });
    } catch (error) {
        res.json({ message: `${error}` })
    }
})


app.listen(3000);