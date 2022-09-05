const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/v1/user.route.js');


// middlewares
app.use(cors());
app.use(express.json());


// user route
app.use('/user', userRouter);


// Test server
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


// no route found
app.all('*', (req, res) => {
    res.send({ success: false, message: "No route found!" });
});

module.exports = app;
