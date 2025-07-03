

// write basic express boiler plate  code,
// with express.json() middleware

const express = require("express");
/* const { createTodo } = require("./types");
const { todo } = require("./db"); */
const app = express();

const cors = require("cors");

app.use(cors({}));
app.use(express.json());
const todos = [{ title: "hi there", discription: "holla", completed: true }, { title: "by", discription: "eow meow" }]

app.get('/fetch', async function (req, res) {

    // const todo = await todo.find({});

    res.json(todos);
});

app.post('/fetch', async function (req, res) {

    const t = req.body.title;
    const d = req.body.discription;
    todos[0].title = t;
    todos[0].discription = d;

    res.status(200).json({ mssg: "added" });

});

/* 

app.post('/input', async function (req, res) {

    const payload = req.body;
    const parsepayload = createTodo.safeParse(payload);
    if (!parsepayload.success) {
        res.status(411).json({
            mssg: "You sent a wrong input",
        })
        return;
    }
    else {
        //put in mongoDb

        await todo.create({
            title: payload.title,
            discription: payload.discription,
            completed: false,
        })

        res.json({ mssg: "Done" });
    }

});

app.put('/update', async function (req, res) {

    const updatePayload = req.body;
    const parsepayload = updateTodo.safeParse(updatePayload);

    if (!parsepayload.success) {
        res.status(411).json({
            mssg: "Wrong input",
        })
        return;
    }

    else {
        //update mongoDb
        await todo.update({
            _id: req.body.id
        }, { completed: true })

        res.json({ mssg: "Done" });
    }
});

 */

app.delete('/remove', function (req, res) {

});

app.listen(3000);