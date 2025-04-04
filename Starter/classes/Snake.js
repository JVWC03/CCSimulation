class Snake {
    constructor(obj) {
        this.snakePosX = obj.snakePosX ?? random(0,400);
        this.snakePosY = obj.snakePosY ?? random(0,250);
        this.snakeWidth = obj.snakeWidth ?? 12;
        this.snakeHeight = obj.snakeHeight ?? 140;
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
}