class Food {
    constructor(obj) {
        this.foodPosX = obj.foodPosX ?? random(0,400);
        this.foodPosY = obj.foodPosY ?? random(0,250);
        this.foodWidth = obj.foodWidth ?? 12;
        this.foodHeight = obj.foodHeight ?? 12;
    }

    render(){
        push()
        translate(this.foodPosX,this.foodPosY)
        fill(0, 0 ,255);
        noStroke();
        beginShape()
        vertex(0,0);
        vertex(this.foodWidth, 0);
        vertex(this.foodWidth, this.foodHeight);
        vertex(0, this.foodHeight);
        endShape(CLOSE)
        pop()
    }

    reposition() {
        this.foodPosX = random(0, 400);
        this.foodPosY = random(0, 250);
    }
}