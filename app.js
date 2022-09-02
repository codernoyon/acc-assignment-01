const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.route.js');


// middlewares
app.use(cors());
app.use(express.json());



app.use(userRouter);


// Test server
app.get("/", (req, res) => {
    res.send({success: true, message: "Random user server is running!"})
});

app.all('*', (req, res) => {
    res.send({success: false, message: "No route found!"})
});


module.exports = app;
