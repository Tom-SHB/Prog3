
function setup() {
    var weath = 'winter'
    var socket = io();

    var side = 30;

    var matrix = [];

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let DemonCountElement = document.getElementById('DemonCount');
    let AngelCountElement = document.getElementById('AngelCount');

    ocket.on("data", drawCreatures);
    socket.on("weather", function (data) {
        weath = data;
    })


    function draw() {

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    if (matrix[i][j] == 1) {
                        if (weath == "spring") {
                            fill("green")
                        }
                        else if (weath == "summer") {
                            fill("#012100");
                        }
                        else if (weath == "winter") {
                            fill("#d6ceb8")
                        }
                        else if (weath == "autumn") {
                            fill("#ad8002")
                        }
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                    }
                    else if (matrix[y][x] == 3) {
                        fill("Blue");
                    }
                    else if (matrix[y][x] == 5) {
                        fill("Red");
                    }


                    rect(x * side, y * side, side, side);

                }
            }
        }
    }
}
