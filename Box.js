class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.0,
        'friction':1.0,
        'density':0.3
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("Sprites/Box.jpg");
    this.visibility=255;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<6){
      push();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
    score(){
      if (this.visibility < 0 && this.visibility > -1005){
        score++;
      }
    }
  }

