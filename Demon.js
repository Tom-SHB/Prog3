var NewCord= require("./NewCord");

module.exports = class Demon extends NewCord{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 10;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }

    mul() {
        var found = this.chooseCell(0);
        var newCell = random(found);

        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            demon.push(new Demon(newX, newY));
            this.energy = 10;
        }
    }
    mul2() {
        var found = this.chooseCell(0);
        var newCell = random(found);

        if (newCell && this.energy >= 12) {
            var nX = newCell[0];
            var nY = newCell[1];
            matrix[nY][nX] = 5;
            demon.push(new Demon(nX, nY));
            this.energy = 10;
        }
    }
    mul3() {
        var found = this.chooseCell(0);
        var newCell = random(found);

        if (newCell && this.energy >= 12) {
            var neX = newCell[0];
            var neY = newCell[1];
            matrix[neY][neX] = 5;
            demon.push(new Demon(neX, neY));
            this.energy = 10;
        }
    }
    
    move() {
        var found = this.chooseCell(0);
        var newCell = random(found);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
        this.energy--;

        if (this.energy < 0) {
            this.die();
        }
    }

    eat() {
        var found = this.chooseCell(1);
        var newCell = random(found);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy++;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
            }
        }
            if (this.energy >= 30) {
                this.mul();
            }
        }

        else {
            this.move();
        }
    }
    eat2() {
        var found = this.chooseCell(2);
        var newCell2 = random(found);
        if (newCell2) {
            var nX = newCell2[0];
            var nY = newCell2[1];
            matrix[nY][nX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = nX;
            this.y = nY;
            this.energy++;

            for (var i in grassArr) {
                if (nX == grassArr[i].x && nY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
            }
        }
            if (this.energy >= 30) {
                this.mul2();
            }
        }

        else {
            this.move();
        }
    }
    eat3() {
        var found = this.chooseCell(3);
        var newCell3 = random(found);
        if (newCell3) {
            var neX = newCell3[0];
            var neY = newCell3[1];
            matrix[neY][neX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = neX;
            this.y = neY;
            this.energy++;

            for (var i in grassArr) {
                if (neX == grassArr[i].x && neY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
            }
        }
            if (this.energy >= 30) {
                this.mul3();
            }
        }

        else {
            this.move();
        }
    }
    
    
    die() {
        for (var i in demon) {
            if (this.x == demon[i].x && this.y == demon[i].y) {
                demon.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0;
    }
}