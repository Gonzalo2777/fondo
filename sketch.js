var fondo, fondoImg;









function preload(){
fondoImg = loadImage("cosa1.png");
}

function setup() {
 createCanvas(600,250);
 fondo=createSprite(600,150);
 fondo.addImage(fondoImg);
 fondo.x = fondo.width/2;
 fondo.velocityX=-5;



}
 
function draw() {
background("green");


if(fondo.x > 400){
  fondo.x = 300;  
}

 

drawSprites()

}