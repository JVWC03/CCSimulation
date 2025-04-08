class Snake {
    constructor(obj) {
        this.snakePosX = obj.snakePosX ?? random(0,400);
        this.snakePosY = obj.snakePosY ?? random(0,250);
        this.snakeVelX = obj.snakeVelX ?? 0;
        this.snakeVelY = obj.snakeVelY ?? 0;
        this.snakeWidth = obj.snakeWidth ?? 15;
        this.snakeHeight = obj.snakeHeight ?? 15;
    }

    render(){
        push()
        translate(this.snakePosX,this.snakePosY)
        fill(255,165,0);
        noStroke();
        beginShape()
        vertex(0,0);
        vertex(this.snakeWidth, 0);
        vertex(this.snakeWidth, this.snakeHeight);
        vertex(0, this.snakeHeight);
        endShape(CLOSE)
        pop()
    }

    move(){
        this.snakePosX += this.snakeVelX;
        this.snakePosY += this.snakeVelY;
    }    

    growSnake(){
        this.snakeWidth += 2;
        this.snakeHeight += 2;
    }

    shrinkSnake(){
        this.snakeWidth -= 2;
        this.snakeHeight -= 2;
    }
}