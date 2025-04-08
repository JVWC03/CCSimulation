class World{
    constructor(obj){
        this.numSnakes = obj.numSnakes || 1;
        this.worldWidth = obj.worldWidth ?? 500;
        this.worldHeight = obj.worldHeight ?? 400;
        this.worldPosX = obj.worldPosX ?? 100;
        this.worldPosY = obj.worldPosY ?? 150;
        this.snake;
        this.food;
        this.obstacles = [];
        this.score = 0;
        this.timer = 10;
        this.generateSnake();
        this.generateFood();
        this.generateObstacles();
    }

    renderWorld(){
        push()
        translate(this.worldPosX,this.worldPosY)
        fill (181,176,176)
        rect(0,0,this.worldWidth,this.worldHeight)
        pop()
    }

    renderSnake(){
        push()
        //noLoop()
        translate(this.worldPosX,this.worldPosY)
        fill(204, 102, 0)
        this.snake.render();
        pop()
    }

    generateSnake(){
        this.snake = new Snake({
        })
    }

    renderFood(){
        push()
        translate(this.worldPosX,this.worldPosY)
        fill(0, 0, 255)
        this.food.render();
        pop()
    }

    generateFood(){
        this.food = new Food({
        })
    }

    renderObstacles() {
        translate(this.worldPosX,this.worldPosY)
        this.obstacles.forEach(obstacle => {
            obstacle.render();
        });
    }

    generateObstacles() {
        for (let i = 0; i < 20; i++) {
            let obstacle = new Obstacle({});
            this.obstacles.push(obstacle);
        }
    }

    moveSnake() {
        this.snake.move();
    }    

    checkDist() {
        let snake = this.snake;
        let food = this.food;
        
        let dist = sqrt(sq(snake.snakePosX - food.foodPosX) + sq(snake.snakePosY - food.foodPosY));
        
        if (dist < (food.foodWidth / 2 + snake.snakeWidth / 2)) {
            console.log("Food eaten!");
            food.reposition();
            this.score += 1;
            this.timer = 10;
            snake.growSnake();
        }
    }

    checkObstacle() {
        let snake = this.snake;
        let obstacle = this.obstacles[0]

        for (let i = 0; i < this.obstacles.length; i++) {
            let obstacle = this.obstacles[i];

            let obstacleDist = sqrt(sq(snake.snakePosX - obstacle.obstaclePosX) + sq(snake.snakePosY - obstacle.obstaclePosY));

            if (obstacleDist < (obstacle.obstacleWidth / 2 + snake.snakeWidth / 2)) {
                snake.shrinkSnake();
            }
        }
    }

    renderScore() {
        push();
        textSize(20);
        fill(0);
        text("Score: " + this.score, this.worldPosX + 5, this.worldPosY + 20);
        pop();
    }

    renderTimer() {
        push();
        textSize(20);
        fill(0);
        text("Time: " + worlds[0].timer, this.worldPosX + 100, this.worldPosY + 20);
        pop();
    }

    updateTimer() {
        if (frameCount % 60 == 0 && this.timer > 0) {
          this.timer--;
        }
        if (worlds[0].timer === 0) {
            text("GAME OVER", width/2, height-100);
            this.score = 0;
          }
      }
      
}