class constraintee{

    constructor(bodyA,bodyB){

var options = {bodyA:bodyA,bodyB:bodyB,stiffness:0.07,length:10}

    this.chain = Matter.Constraint.create(options)

    World.add(world,this.chain)



    }

   display(){


  var posa = this.chain.bodyA.position
  var posb = this.chain.bodyB.position

    strokeWeight(4)
    line(posa.x,posa.y,posb.x,posb.y)

   }

}