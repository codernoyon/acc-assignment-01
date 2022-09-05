const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/v1/user.route.js');



// middlewares
app.use(cors());
app.use(express.json());


// user route
app.use('/user' ,userRouter);




// Test server
app.get("/", (req, res) => {
    res.send({success: true, message: "Random user server is running!"})
});
// no route found
app.all('*', (req, res) => {
    res.send({success: false, message: "No route found!"})
});

module.exports = app;
// const users = JSON.parse(data);
            // const { userNewData } = req.body;
            // const updatedUsers = users.map((user) => {
            //     const updatedUser = userNewData.find((u) => u.id === user.id);
            //     return updatedUser ? { ...user, ...updatedUser } : user;

            // });

            // fs.writeFile(__dirname + '/users.json', JSON.stringify(updatedUsers), (err) => {
            //     if (err) {
            //         res.send({
            //             success: false,
            //             message: err.message
            //         });
            //     } else {
            //         res.send({
            //             success: true,
            //             message: "Successfully user information update."
            //         });
            //     }
            // });