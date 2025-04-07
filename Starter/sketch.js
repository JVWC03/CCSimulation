let worlds = [];

function setup(){
    createCanvas(570,440);
    background(255,0,0);
    angleMode(DEGREES)

    worlds.push(new World({
        worldWidth:500,
        worldHeight:400,
        worldPosX:35,
        worldPosY:20,
    }))
}

function draw(){
    worlds[0].renderWorld()
    worlds[0].renderSnake()
    worlds[0].renderFood()
    worlds[0].moveSnake()
    worlds[0].checkDist()
    worlds[0].renderObstacles()
    worlds[0].checkObstacle()
    worlds[0].renderScore()
}

function keyPressed() {
    const snake = worlds[0].snake;
  
    if (key === "W") {
      console.log("Moving up");
      snake.snakeVelX = 0;
      snake.snakeVelY = -2;
    }
  
    if (key === "S") {
      console.log("Moving down");
      snake.snakeVelX = 0;
      snake.snakeVelY = 2;
    }
  
    if (key === "D") {
      console.log("Turning right");
      snake.snakeVelX = 2;
      snake.snakeVelY = 0;
    }
  
    if (key === "A") {
      console.log("Turning left");
      snake.snakeVelX = -2;
      snake.snakeVelY = 0;
    }
    redraw();
}
