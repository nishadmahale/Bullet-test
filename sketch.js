var wall,thickness;
var bullet,speed,weight;






function setup () {
    createCanvas(1600,800)
    
    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83);
    bullet.velocityX=speed;
    
    bullet=createSprite(50,200,50,50);
    wall=createSprite(1200,200,60,thickness,height/2);
    
   




}


function draw(){
    
    if(hasColided (bullet,wall)) {
        
        bullet.velocityX=0;

       var  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
        car.velocityX=0;
    if(damage>10){
            bullet.shapeColor= colour(255,0,0);
       }
    if (damage<10){
       bullet.shapeColor=colour(0,255,0);
      }
    
    }
    

drawSprites();
}

function hasColided(Lbullet,Lwall) {
  bulletRightEdge=Lbullet.x+bullet.width;
  wallLeftEdge=Lwall.x  

  if(bulletRightEdge>=wallLeftEdge) {

    return true;



  }

    return false;




}
