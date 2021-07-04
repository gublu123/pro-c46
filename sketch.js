const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, arrowboardImg1, arrowboardImg2;
var targetImg;
var arrow1
var count=0;
var score1 = 0;
var score2 = 0;
var a=0;
function preload(){
    targetImg=loadImage("arrow board 1.png")
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight - 100);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-50, width, 50);


    arrow1=new Arrow(250,height-250);
    arrow2=new Arrow(width-250,height-250);

    slingshot1 = new SlingShot(arrow1.body, {x:250, y:height-250})
    slingshot2 = new SlingShot(arrow2.body, {x:width-250, y:height-250})
}

function draw(){
    background("grey");
    Engine.update(engine);
    fill(0);
    imageMode(CENTER);
    //target1
    image(targetImg,250,200,width/5,width/5)
    //target2
    image(targetImg,width-250, 200, width/5,width/5)
    ground.display();
    
   console.log(score1);

   /*if(a<10&&a>5)
   {
       console.log("Hi");
   }
   else{
       console.log("Hello");
   }*/
    
    //if(a==0){
    
    
    if(count%2==0){
        text("PLAYER 1 SHOOT",500,100); 
    }
//}
    detectCollision(arrow1);
    detectCollision(arrow2);

    text (score1,250,20);
    text(arrow1.body.position.y,500,300);

    arrow1.display();
    arrow2.display();
    slingshot1.display();
    slingshot2.display();
    
    console.log(arrow1.body.position.y);
    console.log(arrow1.body.position.x);

    score();   
}

function mouseDragged(){
    if(count%2==0){
        Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
    }
    else
        Matter.Body.setPosition(arrow2.body,{x:mouseX,y:mouseY})
        a = 0;
}


function mouseReleased(){
    if(count%2==0){
       slingshot1.fly();  
       count++;
    }
    else{ 
       slingshot2.fly(); 
       count++;
    }
    
}

function detectCollision(arrow){
	if(arrow.body.position.y<=arrow.height/2+width/5){
	   Matter.Body.setStatic(arrow.body,true);
       console.log("touching");
       a = 1;
	}
}
   
function score(){
    if((arrow1.body.position.y<370 && arrow1.body.position.y>=325) && arrow1.body.velocity.y<1 && a === 0){
        score1=score1+2;
        console.log(score1);
    }
    if((arrow1.body.position.y<325 && arrow1.body.position.y>=290) && arrow1.body.velocity.y<1 && a === 0){
        score1=score1+3;
        console.log(score1);
       
    }
    if((arrow1.body.position.y<260 && arrow1.body.position.y>=230) && arrow1.body.velocity.y<1 && a === 0){
        score1=score1+5;
        console.log(score1);
       
    }
    if((arrow1.body.position.y<230 && arrow1.body.position.y>=170) && arrow1.body.velocity.y<1 && a === 0){
        score1=score1+10;
        console.log(score1);
    }
}