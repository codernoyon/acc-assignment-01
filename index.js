const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middlewares
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send({success: true, message: "Random user server is running!"})
});

app.all('*', (req, res) => {
    res.send({success: false, message: "No route found!"})
});

app.listen(port, () => {
    console.log(`Random user server running on port ${port}`)
});
