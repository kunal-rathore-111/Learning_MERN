

// CORS is also a middleware which stands for cross original resource sharing (sharing the http server to different origins like my server is on usa and frontend in India my system)

// Or we have our local http server on 3000 port and forntend was on 1501 port so we will have to use cors to get access of the serverf for port 1501


// task->  create a backend server in node.js that returns sum to an end point then write and html file that hit backend using fetch api


const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/sum", function (req, res) {

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({ ans: a + b });

});


app.listen(3001);