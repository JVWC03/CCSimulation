class Obstacle {
    constructor(obj) {
        this.obstaclePosX = obj.obstaclePosX ??  random(0,400);
        this.obstaclePosY = obj.obstaclePosY ??  random(0,400);
        this.obstacleWidth = obj.obstacleWidth ?? 12;
        this.obstacleHeight = obj.obstacleHeight ?? 12;
    }

    render(){
        push()
        translate(this.obstaclePosX,this.obstaclePosY)
        fill(255, 0 ,0);
        noStroke();
        beginShape()
        vertex(0,0);
        vertex(this.obstacleWidth, 0);
        vertex(this.obstacleWidth, this.obstacleHeight);
        vertex(0, this.obstacleHeight);
        endShape(CLOSE)
        pop()
    }
}