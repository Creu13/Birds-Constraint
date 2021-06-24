class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB, //body has posiiton, and posiitoon has x and y values, so don't need in it for bodyB
            stiffness: 0.01,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly() {
        //reset to null, empty it's value
        this.chain.bodyA = null; // null is data types
    }
    show(){

        if(this.chain.bodyA){
            //do this only when bodyA is true, then only execute
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}