class Obstacle {
    constructor(obj) {
        this.obstaclePosX = obj.obstaclePosX ?? random(50, 450);
        this.obstaclePosY = obj.obstaclePosY ?? random(50, 350);
        this.obstacleWidth = obj.obstacleWidth ?? 12;
        this.obstacleHeight = obj.obstacleHeight ?? 12;
    }

    render() {
        push();
        fill(255, 0, 0);
        noStroke();
        beginShape();
        vertex(this.obstaclePosX, this.obstaclePosY);
        vertex(this.obstaclePosX + this.obstacleWidth, this.obstaclePosY);
        vertex(this.obstaclePosX + this.obstacleWidth, this.obstaclePosY + this.obstacleHeight);
        vertex(this.obstaclePosX, this.obstaclePosY + this.obstacleHeight);
        endShape(CLOSE);
        pop();
    }
}