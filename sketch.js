var bullet,wall;
var speed,weight,thickness;

function setup () {

     createCanvas(1600,800);
    
    car=createSprite(50,200,50,50);
    wall=createSprite(1500,200,60,height/2);
    
    
    speed=random(55,90);
    car.velocityX=speed;
    
    weight=random(400,1500);
     thickness=random(22,83);
    
    
  

    bullet=createSprite(50,200,50,50,thickness.width/2);
    wall=createSprite(1200,200,60);
    
   

    




}


function draw(){
     background("Green");
    
    
   
if(hasColided (bullet,wall)) {
        
        bullet.velocityX=0;

       var  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
} 
 if(damage>10){
            bullet.shapeColor=color(255,0,0);
       }
    if (damage<10){
       bullet.shapeColor=color(0,255,0);
    
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
