

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
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
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEatArr) {
        grassEatArr[i].eat();
    }
    for (var i in angel) {
        angel[i].eat();
    }
    for (var i in angel) {
        angel[i].eat2();
    }
    for (var i in demon) {
        demon[i].eat();
    }
    for (var i in demon) {
        demon[i].eat2();
    }
    for (var i in demon) {
        demon[i].eat3();
    }
}