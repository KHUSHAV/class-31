class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.location = []  
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    if(this.body.position.x>220&&this.body.velocity.x>3){
    var position =[ this.body.position.x,this.body.position.y]
    this.location.push(position);
    
  }
 
   for(var i=0 ; i<this.location.length ; i++){
    image (this.smokeImage,this.location[i][0], this.location[i][1])
   }
   
  

    super.display();
  }
}
