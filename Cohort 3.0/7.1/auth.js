


const jwt = require("jsonwebtoken");
const jwt_secret = "s3cret";
const { usersModel, todosModel } = require("./db.js");


// auth for signIn
async function signinAuth(req, res, next) {
    const email = req.body.email, password = req.body.password;
    // find in db
    const isExists = await usersModel.findOne({
        email: email,
        password: password
    })
    if (isExists) {
        const token = jwt.sign({ userId: isExists._id }, jwt_secret);
        res.header({ token: token });
        next();
    }
    else {
        res.json({ mssg: "Wrong input" });
    }
}

// auth for adding and fethcing todos
async function auth(req, res, next) {
    const token = req.headers.token;
    const decodeToken = jwt.verify(token, jwt_secret);

    // find the userId of decodeToken in db to verify the token is valid
    const decodeToken_userId = decodeToken.userId.toString(); // toString so the objectId is a type which will convert in string type

    // check is the token is valid or not
    const isValid = await usersModel.findOne({
        _id: decodeToken_userId
    });

    if (isValid) {
        req.userId = decodeToken_userId;
        next();
    }
    else {
        res.json({ mssg: "Invalid token" });
    }
}


module.exports = ({ signinAuth, jwt_secret, auth });