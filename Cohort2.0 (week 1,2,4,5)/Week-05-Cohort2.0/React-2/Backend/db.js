

const mongoose = require("mongoose");

moongose.connect = {};

const todoSchema = mongoose.Schema({
    title: String,
    discription: String,
    completed: Boolean,
})


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}