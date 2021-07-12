class Polygon {
    constructor(bodyA,pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
    
   
      this.Cpolygon =Constraint.create(options);
      this.pointB=pointB;
        World.add(world,this.Cpolygon)
       //constraint name inside class is Cpolygon....when attach and fly fn is used use Cpolygon
    
    }
    display(){
      if(this.Cpolygon.bodyA){
        var pointA=this.Cpolygon.bodyA.position
        var pointB=this.pointB
        stroke(10)
        strokeWeight(4)
        stroke("pink")
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
      
    }
  };
  