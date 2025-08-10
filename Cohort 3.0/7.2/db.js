
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.ObjectId;

const users = new schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
});

const todos = new schema({
    title: { type: String },
    isDone: { type: Boolean },
    userId: objectId
});

const usersModel = mongoose.model("users", users);
const todosModel = mongoose.model("todos", todos);

module.exports = { usersModel, todosModel };