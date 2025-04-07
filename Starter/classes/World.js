class World{
    constructor(obj){
        this.numSnakes = obj.numSnakes || 1;
        this.worldWidth = obj.worldWidth ?? 500;
        this.worldHeight = obj.worldHeight ?? 400;
        this.worldPosX = obj.worldPosX ?? 100;
        this.worldPosY = obj.worldPosY ?? 150;
        this.snake;
        this.food;
        this.generateSnake();
        this.generateFood();
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
        noLoop()
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
        }
    }
}