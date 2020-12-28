class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke= loadImage("sprites/smoke.png");

    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos= [this.body.position.x,this.body.position.y];
      this.trajectory.push(pos);
    }
    

    for(var a=0; a<this.trajectory.length; a=a+1){
      image (this.smoke, this.trajectory[a][0],this.trajectory[a][1])
    }
  }
}
