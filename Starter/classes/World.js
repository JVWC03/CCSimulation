class World{
    constructor(obj){
        this.numSnakes = obj.numSnakes || 1;
        this.worldWidth = obj.worldWidth ?? 500;
        this.worldHeight = obj.worldHeight ?? 400;
        this.worldPosX = obj.worldPosX ?? 100;
        this.worldPosY = obj.worldPosY ?? 150;
        this.snakes = [];
    }

    renderWorld(){
        push()
        translate(this.worldPosX,this.worldPosY)
        fill (68,85,90)
        rect(0,0,this.worldWidth,this.worldHeight)
        pop()
    }
}