

const jwt = require("jsonwebtoken");
const jwt_secret = "s3cret";
const bcrypt = require("bcrypt");
const { usersModel, todosModel } = require("./db.js");

async function signINauth(req, res, next) {
    const password = req.body.password, email = req.body.email;

    // check whether the password is correct or not
    const respond = await usersModel.findOne({
        email: email,
    });

    if (!respond) {
        res.json({ message: "User does not exists" });
    }
    else {
        // check the password
        const matchPassword = await bcrypt.compare(password, respond.password);  // here compare is a function which checks either the password is correct or not
        if (matchPassword) {

            const userId = respond._id;
            const token = jwt.sign({ userId: userId }, jwt_secret);
            res.header({ token: token });
            next();
        }
        else {
            res.json({ message: "Incorrect password" });
        }
    }

}

async function auth(req, res, next) {

    const token = req.headers.token;
    const decodedToken = jwt.verify(token, jwt_secret);

    if (decodedToken) {
        const decodedToken_userId = decodedToken.userId.toString();

        if (decodedToken_userId) {
            const isValid = usersModel.findOne({
                _id: decodedToken_userId
            });

            if (isValid) {
                req.userId = decodedToken_userId;
                next();
            }
        }
    }
    else {
        res.json({ message: "Incorrect token" });
    }


}


module.exports = { signINauth, auth };