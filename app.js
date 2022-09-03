const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/v1/user.route.js');



// middlewares
app.use(cors());
app.use(express.json());


// user route
app.use('/user' ,userRouter);

// app.get('/user/random', (req, res) => {
//     fs.readFile('users.json', (err, data) => {
//         if(err) {
//             res.send("Failed to readFile")
//         }else{
//             res.send(JSON.parse(data))
//         }
//     })
// })


// Test server
app.get("/", (req, res) => {
    res.send({success: true, message: "Random user server is running!"})
});
// no route found
app.all('*', (req, res) => {
    res.send({success: false, message: "No route found!"})
});

module.exports = app;
