var marioPng,mario,background,backgimage;
var invisbleGround;
var gameState;
var PLAY = 1;
function preload(){
    marioPng = loadImage("mario.png")
    backgimage = loadImage("backg.png")

}

function setup() {
    createCanvas(800,600);
    mario = createSprite(50,50,10,10);
    mario.addImage("mario",marioPng);
    mario.scale = 0.01;
    text(gameState,50,50);  
    mario.layer = 2;
    background = createSprite(50,50,400,20);
    background.addImage("backgroundImage",backgimage);
    background.scale = 2.5; 
    background.layer = 1;
    gameState = PLAY;
}

function draw() {
   if(gameState === PLAY){
       controlls();
       collision();
       mario.layer = background.layer + 1;
   }
   drawSprites();
}
function controlls(){
    if(keyDown("up_arrow")){
        mario.velocity = -10;
    }
}
function collision(){
    //mario.collide(invisbleGround);
}