const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var arrow;
var slingshot;
var score = 0;

function setup() {
  createCanvas(340, 600);
	engine = Engine.create();
	world = engine.world;

 
  //blue
  b1 = new Bbubble(15,40,15);
  b2 = new Bbubble(315,40,15);
  b3 = new Bbubble(30,65,15);
  b4 = new Bbubble(300,65,15);
  b5 = new Bbubble(15,90,15);
  b6 = new Bbubble(45,90,15);
  b7 = new Bbubble(285,90,15);
  b8 = new Bbubble(315,90,15);
  b9 = new Bbubble(25,115,15);
  b10 = new Bbubble(55,115,15);
  b11 = new Bbubble(265,115,15);
  b12 = new Bbubble(295,115,15);
  b13 = new Bbubble(35,140,15);
  b14 = new Bbubble(65,140,15);
  b15 = new Bbubble(245,140,15);
  b16 = new Bbubble(275,140,15);
  b17 = new Bbubble(45,165,15);
  b18 = new Bbubble(75,165,15);
  b19 = new Bbubble(225,165,15);
  b20 = new Bbubble(255,165,15);
  b21 = new Bbubble(55,190,15);
  b22 = new Bbubble(85,190,15);
  b23 = new Bbubble(205,190,15);
  b24 = new Bbubble(235,190,15);

  //sky blue
  b25 = new SBlueBubble(35,15,15);
  b26 = new SBlueBubble(305,15,15);
  b27 = new SBlueBubble(45,40,15);
  b28 = new SBlueBubble(285,40,15);
  b29 = new SBlueBubble(60,65,15);
  b30 = new SBlueBubble(270,65,15);
  b31 = new SBlueBubble(75,90,15);
  b32 = new SBlueBubble(255,90,15);
  b33 = new SBlueBubble(85,115,15);
  b34 = new SBlueBubble(235,115,15);
  b35 = new SBlueBubble(95,140,15);
  b36 = new SBlueBubble(215,140,15);
  b37 = new SBlueBubble(105,165,15);
  b38 = new SBlueBubble(195,165,15);
  b39 = new SBlueBubble(115,190,15);
  b40 = new SBlueBubble(175,190,15);

  //green
  b41 = new Gbubble(125,15,15);
  b42 = new Gbubble(215,15,15);
  b43 = new Gbubble(135,40,15);
  b44 = new Gbubble(195,40,15);
  b45 = new Gbubble(150,65,15);
  b46 = new Gbubble(180,65,15);
  b47 = new Gbubble(165,90,15);

  //violet
  b48 = new VBubble(155,15,15);
  b49 = new VBubble(185,15,15);
  b50 = new VBubble(165,40,15);

  //red
  b51 = new RBubble(65,15,15);
  b52 = new RBubble(95,15,15);
  b53 = new RBubble(245,15,15);
  b54 = new RBubble(275,15,15);
  b55 = new RBubble(75,40,15);
  b56 = new RBubble(105,40,15);
  b57 = new RBubble(225,40,15);
  b58 = new RBubble(255,40,15);
  b59 = new RBubble(90,65,15);
  b60 = new RBubble(120,65,15);
  b61 = new RBubble(210,65,15);
  b62= new RBubble(240,65,15);
  b63 = new RBubble(105,90,15);
  b64 = new RBubble(135,90,15);
  b65 = new RBubble(195,90,15);
  b66 = new RBubble(225,90,15);
  b67 = new RBubble(115,115,15);
  b68 = new RBubble(145,115,15);
  b69 = new RBubble(175,115,15);
  b70 = new RBubble(205,115,15);
  b71 = new RBubble(125,140,15); 
  b72 = new RBubble(155,140,15);
  b73 = new RBubble(185,140,15);
  b74 = new RBubble(135,165,15);
  b75 = new RBubble(165,165,15);
  b76 = new RBubble(145,190,15);


  shooter = new Arrow(370,500,20);

  slingshot = new SlingShot(shooter.body,{x:170 , y:500});

  Engine.run(engine);
}

function draw() {
  background(225);  

  textSize(20)
  fill(0);
  text("Score : "+score,10,580);

//displaying blue bubbles
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
//displaying sky blue bubbles
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
 //displaying green bubbles 
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();
  b47.display();
//displaying violet bubbles
  b48.display();
  b49.display();
  b50.display();
//displaying red bubbles
  b51.display();
  b52.display();
  b53.display();
  b54.display();
  b55.display();
  b56.display();
  b57.display();
  b58.display();
  b59.display();
  b60.display();
  b61.display();
  b62.display();
  b63.display();
  b64.display();
  b65.display();
  b66.display();
  b67.display();
  b68.display();
  b69.display();
  b70.display();
  b71.display();
  b72.display();
  b73.display();
  b74.display();
  b75.display();
  b76.display();
  
// creating arrow   
  shooter.display();
// creating slingshot
  slingshot.display();
// when arrow touches bubbles should fall down
  detectCollision1(shooter,b1);
  detectCollision1(shooter,b2);
  detectCollision1(shooter,b3);
  detectCollision1(shooter,b4);
  detectCollision1(shooter,b5);
  detectCollision1(shooter,b6);
  detectCollision1(shooter,b7);
  detectCollision1(shooter,b8);
  detectCollision1(shooter,b9);
  detectCollision1(shooter,b10);
  detectCollision1(shooter,b11);
  detectCollision1(shooter,b12);
  detectCollision1(shooter,b13);
  detectCollision1(shooter,b14);
  detectCollision1(shooter,b15);
  detectCollision1(shooter,b16);
  detectCollision1(shooter,b17);
  detectCollision1(shooter,b18);
  detectCollision1(shooter,b19);
  detectCollision1(shooter,b20);
  detectCollision1(shooter,b21);
  detectCollision1(shooter,b22);
  detectCollision1(shooter,b23);
  detectCollision1(shooter,b24);

  detectCollision4(shooter,b25);
  detectCollision4(shooter,b26);
  detectCollision4(shooter,b27);
  detectCollision4(shooter,b28);
  detectCollision4(shooter,b29);
  detectCollision4(shooter,b30);
  detectCollision4(shooter,b31);
  detectCollision4(shooter,b32);
  detectCollision4(shooter,b33);
  detectCollision4(shooter,b34);
  detectCollision4(shooter,b35);
  detectCollision4(shooter,b36);
  detectCollision4(shooter,b37);
  detectCollision4(shooter,b38);
  detectCollision4(shooter,b39);
  detectCollision4(shooter,b40);
 
  detectCollision2(shooter,b41);
  detectCollision2(shooter,b42);
  detectCollision2(shooter,b43);
  detectCollision2(shooter,b44);
  detectCollision2(shooter,b45);
  detectCollision2(shooter,b46);
  detectCollision2(shooter,b47);

  detectCollision5(shooter,b48);
  detectCollision5(shooter,b49);
  detectCollision5(shooter,b50);

  detectCollision3(shooter,b50);
  detectCollision3(shooter,b51);
  detectCollision3(shooter,b52);
  detectCollision3(shooter,b53);
  detectCollision3(shooter,b54);
  detectCollision3(shooter,b55);
  detectCollision3(shooter,b56);
  detectCollision3(shooter,b57);
  detectCollision3(shooter,b58);
  detectCollision3(shooter,b59);
  detectCollision3(shooter,b60);
  detectCollision3(shooter,b61);
  detectCollision3(shooter,b62);
  detectCollision3(shooter,b63);
  detectCollision3(shooter,b64);
  detectCollision3(shooter,b65);
  detectCollision3(shooter,b66);
  detectCollision3(shooter,b67);
  detectCollision3(shooter,b68);
  detectCollision3(shooter,b69);
  detectCollision3(shooter,b70);
  detectCollision3(shooter,b71);
  detectCollision3(shooter,b72);
  detectCollision3(shooter,b73);
  detectCollision3(shooter,b74);
  detectCollision3(shooter,b75);
  detectCollision3(shooter,b76);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(shooter.body);
  }
}
function detectCollision1(larrow, lblue){
  BbubbleBodyPosition = lblue.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, BbubbleBodyPosition.x, BbubbleBodyPosition.y)

  if(distance<=lblue.r+larrow.r)
  {
    Matter.Body.setStatic(lblue.body, false);
    score += 1;
  }
}

function detectCollision2(larrow, lgreen){
  GbubbleBodyPosition = lgreen.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , GbubbleBodyPosition.x,  GbubbleBodyPosition.y)

  if(distance<=lgreen.r+larrow.r)
  {
    Matter.Body.setStatic(lgreen.body, false);
    score += 1;
  }
}

function detectCollision3(larrow, lred){
  RBubbleBodyPosition = lred.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , RBubbleBodyPosition.x,  RBubbleBodyPosition.y)

  if(distance<=lred.r+larrow.r)
  {
    Matter.Body.setStatic(lred.body, false);
    score += 1;
  }
}

function detectCollision4(larrow, lSblue){
  SBlueBubbleBodyPosition = lSblue.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, SBlueBubbleBodyPosition.x, SBlueBubbleBodyPosition.y)

  if(distance<=lSblue.r+larrow.r)
  {
    Matter.Body.setStatic(lSblue.body, false);
    score += 1;
  }
}

function detectCollision5(larrow, lpurple){
  VBubbleBodyPosition = lpurple.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, VBubbleBodyPosition.x, VBubbleBodyPosition.y)

  if(distance<=lpurple.r+larrow.r)
  {
    Matter.Body.setStatic(lpurple.body, false);
    score += 1;
  }
}