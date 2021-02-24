class rainDrop{
    constructor(x, y) {
        var options = {
            'friction':0.1
        }
        this.radius=5;
        this.body = Bodies.circle(x, y,this.radius,options);
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
      fill("blue");
       ellipseMode(CENTER);
        ellipse( 0, 0,this.radius,this.radius);
pop()

      }
      newDrops(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
        }
      }
}