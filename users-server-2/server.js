const express = require("express");
const app = express();
var http = require('http');
var server = http.createServer(app);


let allUsers = [
    { userId: 1, name: 'User 1' },
    { userId: 2, name: 'User 2' },
    { userId: 3, name: 'User 3' }
];

app.get('/', (req, res) => {
    res.send({ status: 'success', port: server.address().port, data: [...allUsers] });
});


server.listen(4003., () => {
    console.log('USERS microservice started at port 4003')
})