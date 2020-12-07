class Bob {
    constructor(x, y,r) {
      var options = {
        'density':0.5,
        'friction': 0.5,
        'restitution':0.3,
        'isStatic' : false  
            };
      
         this.x=x;
         this.y=y;
         this.r=r;
         this.body=Bodies.circle(this.x, this.y, this.r/2, options);
         World.add(world, this.body);

         


    };
    display(){
      var pos = this.body.position;
      push()
      translate(pos.x,pos.y);
      imageMode(CENTER);
      strokeWeight(1);
      fill("blue");
      ellipse(0,0,this.r,this.r);
      //image(this.image,0,0,100,100);
      pop();
      
  
    };
  };
  