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
}

function keyPressed(){
    
}
