class Ball {
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
            friction: 1,
            density: 1.5
        }
       this.ball = bodies.circle(x,y,r,options);
       world.add(myWorld,this.ball);
       this.radius = r
    }

    display(){
        var pos = this.ball.position
        rectMode(CENTER);
        push();
        
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.radius);
        pop();
        
    }
}