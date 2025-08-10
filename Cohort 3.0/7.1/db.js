
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.ObjectId;

const users = new schema({
    email: { type: String, unique: true },
    userName: { type: String, unique: true },
    password: { type: String },
});

const todos = new schema({
    title: { type: String },
    isDone: { type: Boolean },
    userId: objectId
});

// converting in model

const usersModel = mongoose.model("users", users);
const todosModel = mongoose.model("todos", todos);


//exporting both the models
module.exports = ({ usersModel: usersModel, todosModel: todosModel });