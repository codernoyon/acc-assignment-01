const fs = require('fs');

exports.randomUser = (req, res) => {
    fs.readFile(__dirname + '/users.json', (err, data) => {
        try {
            if (err) {
                res.send("Failed to read data");
            } else {
                const users = JSON.parse(data);
                const randomNumber = Math.ceil(Math.random() * users.length);
                const randomOne = users.find(user => user.id === randomNumber);
                res.json(randomOne);
            }
        } catch (error) {
            console.log(error);
        }
    });
};


exports.allUser = (req, res) => {
    fs.readFile(__dirname + '/users.json', (err, data) => {
        if (err) {
            res.send({
                success: false,
                error: "Failed to read data"
            });
        } else {
            if (req.query.limit) {
                const limit = Number(req.query.limit);
                const users = JSON.parse(data);

                res.status(200).send({
                    success: true,
                    data: users.slice(0, limit)
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: JSON.parse(data)
                });
            }

        }
    });
};

const newData = {
    id: 11,
    photoUrl: "https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg",
    name: "Noyon Rahman",
    gender: "male",
    contact: "+8801706592962",
    address: "Gazipur, Dhaka, Bangladesh"
};


exports.savedUser = (req, res) => {
    fs.readFile(__dirname + '/users.json', (err, data) => {
        if(!err){
            const jsonData = JSON.parse(data)
            const existId = jsonData.find(user => user.id === Number(req.body.id));
            if(existId){
                console.log(req.body.id, 'This id user already exist!!');
            }
            // jsonData.push(newData)
            // fs.writeFile(__dirname + '/users.json', JSON.stringify(jsonData), (error) => {
            //     if(error){
            //         console.log(error)
            //     }else{
            //         console.log('Append success');
            //     }
            // })
        }
    })
};