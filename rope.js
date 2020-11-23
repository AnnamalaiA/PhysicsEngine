class Rope{
    constructor(b,p){
        options = {
            bodyA: b,
            pointB: p
        }
        this.rope = constraint.create(options);
        world.add(myWorld,this.rope);

    }

    display(){
        stroke("brown");
        strokeWeight(5);
        //line(x1,y1,x2,y2)
        var pos1 = this.rope.bodyA.position
        var pos2 = this.rope.pointB
        line(pos1.x,pos1.y,pos2.x,pos2.y)
    }
}