var Grass = require("./Grass.js");
var GrassEater = require("./GrassEat.js");
var Angel = require("./Angel.js");
var Demon = require("./Demon.js");

matrix = [];
side = 50;
grassArr = [];
grassEatArr = [];
angel = [];
demon = [];

function generator(grass1, grassEat1, matrixSize, angel1, demon1) {
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < grass1; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 1;
        grassArr.push(new Grass(x, y));
    }
    for (let i = 0; i < grassEat1; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 2;
        grassEatArr.push(new GrassEater(x, y));
    }
    for (let i = 0; i < angel1; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 3;
        angel.push(new Angel(x, y));
    }
    for (let i = 0; i < demon1; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 5;
        demon.push(new Demon(x, y));
    }
}

frameRate(5);
let grass1 = document.getElementById("Grass");
let grassEat1 = document.getElementById("GrassEater");
let angel1 = document.getElementById("Angel");
let demon1 = document.getElementById("Demon");
let button = document.getElementById("button")
button.onclick = function () {
    generator(grass1.value, grassEat1.value, 25, angel1.value, demon1.value);
    createCanvas(matrix[0].length * side, matrix.length * side)

}

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(5000);