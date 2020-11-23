class Box {
    constructor(x,y,w,h){
        var options = {
            restitution: 0.3,
            friction: 1,
            density: 1
        }
       this.box = bodies.rectangle(x,y,w,h,options);
       world.add(myWorld,this.box);
       this.width = w;
       this.height = h;
    }

    display(){
        var pos = this.box.position
        rectMode(CENTER);
        push();
        strokeWeight(5)
        stroke("white")
        fill("black");
        rect(pos.x, pos.y,this.width,this.height);
        pop();
        
    }
}