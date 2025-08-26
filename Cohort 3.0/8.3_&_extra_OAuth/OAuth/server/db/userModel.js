
const mongoose = require("mongoose");

const users = new mongoose.Schema({
    googleId: { type: String },
    displayName: { type: String },
    email: { type: String },
    image: { type: String },
}, { timestamps: true });

const usersModel = mongoose.model("users", users);

module.exports = usersModel;