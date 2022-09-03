const fs = require('fs');

exports.randomUser = (req, res) => {
    fs.readFile(__dirname + '/users.json', (err, data) => {
        if(err){
            res.send("Faile to read file")
        }else{
            const users = JSON.parse(data);
            const randomNumber = Math.ceil(Math.random() * users.length);
            const randomOne = users.find(user => user.id === randomNumber)
            res.send({randomOne})
        }
    })
}