

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOO_URL)
    .then(() => { console.log("DB connected") })
    .catch((error) => { console.log("DB connection error- ", error) });


module.exports = mongoose;