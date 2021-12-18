
var welcomePage,welcomePageImg;
var playButton,playButtonImg;
var controlButton,controlButtonImg,controlInformation,controlInformationImg;
var closeButton,closeButtonImg;
var storyButton,storyButtonImg,story,storyImg;
var introSound;

var scoreImg;
var onescore = 0;

var edges1;
var edges2;
var edges3;

var InsLevelOneTrack1,InsLevelOneTrack2,InsLevelOneTrack3;
var forest,forestImg;
var InsLevelOneGround;
var levelOneTrackImg;
var levelOneGem1,levelOneGem2,levelOneGem3,levelOneGem4,levelOneGem5,levelOneGem6,levelOneGem7,levelOneGem8,levelOneGem9,
    levelOneGem10,levelOneGem11;
var levelOneGem1Img,levelOneGem2Img,levelOneGem3Img,levelOneGem4Img,levelOneGem5Img;
var FinishFlagInswall;


var mainMenuButton, mainMenuButtonImg;


//this flag image is common for every level flag;
var FinishFlagImg;

var levelTwoTrack1, levelTwoTrack2, levelTwoTrack3, levelTwoTrack4, levelTwoTrack5, levelTwoTrack6,
    levelTwoTrack7, levelTwoTrack8, levelTwoTrack9, levelTwoTrack10, levelTwoTrack11, levelTwoTrack12;
var levelTwotriangleP1, levelTwotriangleP2, levelTwotriangleP3;
var snow, snowImg;
var levelTwoGround;
var levelTwoTrackImg;
var levelTwoTrack1Img;
var levelTwolockImg, levelTwolockKey, levelTwolockKeyImg;
var levelTwoRounderOB, levelTwoRounderOBImg;
//this below img is common for two sprites;
var levelTwoOBImg;
var levelTwoOB1;
var levelTwoOB2;
var levelTwoSnakeOB,levelTwoSnakeOBImg;
var levelTwoFinishFlag;
var levelTwoGem1,levelTwoGem2,levelTwoGem3,levelTwoGem4,levelTwoGem5,levelTwoGem6
,levelTwoGem7,levelTwoGem8,levelTwoGem9,levelTwoGem10,levelTwoGem11,levelTwoGem12,levelTwoGem13;
var levelTwoGem1Img,levelTwoGem2Img,levelTwoGem3Img,levelTwoGem4Img,levelTwoGem5Img;
var levelTwoLife = 5;
var heartImg;
var lev2Heart1,lev2Heart2,lev2Heart3,lev2Heart4,lev2Heart5;
    

var gameState = "start";

var playerStand;
var playerSideWays;
var player;
var player1;

var treasure,treasure1,treasure2;
var treasureImg;
var treausreCollectingSound;
var jump = 0;

function preload(){
    //welcomepage;
    welcomePageImg = loadImage("images/backgrounds/welcomePage.jpg");

    //level-1 images;
    forestImg = loadImage("images/backgrounds/forestImg.jpg");
    levelOneTrackImg = loadImage("images/track/rockPath.png");

    //scoreimg;
    scoreImg = loadImage("images/gems/point.png");

    //FLAG;
    FinishFlagImg = loadImage("images/flags/finishflag.png");

    //level-2 images;
    snowImg = loadImage("images/backgrounds/snowImg.jpg");
    levelTwoTrackImg = loadImage("images/track/snowpath1.png");
    levelTwoTrack1Img = loadImage("images/track/snowtrack2.png");
    levelTwolockImg = loadImage("images/track/lock.png");
    levelTwoRounderOBImg = loadImage("images/obstacles/obstacle1.png");
    levelTwoOBImg = loadImage("images/obstacles/obstacle3.png");
    levelTwoSnakeOBImg = loadImage("images/obstacles/snake.png");
    levelTwolockKeyImg = loadImage("images/key.png");
    heartImg = loadImage("images/heart.png");

    //character
     playerStand = loadImage("images/c/standing.png");
     playerSideWays = loadImage("images/c/sum.png");

    //buttons;
    playButtonImg = loadImage("images/buttons/playButton.png");
    controlButtonImg = loadImage("images/buttons/controlButton.png");
    controlInformationImg = loadImage("images/backgrounds/control.png");
    closeButtonImg = loadImage("images/buttons/close button.png");
    storyButtonImg = loadImage("images/buttons/storybutton.png");
    storyImg = loadImage("images/backgrounds/story.png");
    mainMenuButtonImg = loadImage("images/buttons/menu.png");

    //loading gems images;
    levelOneGem1Img = loadImage("images/gems/line1gem1.png");
    levelOneGem2Img = loadImage("images/gems/line1gem2.png");
    levelOneGem3Img = loadImage("images/gems/line1gem3.png");
    levelOneGem4Img = loadImage("images/gems/line1gem4.png");
    levelOneGem5Img = loadImage("images/gems/line1gem5.png");

    levelTwoGem1Img = loadImage("images/gems/line2gem1.png");
    levelTwoGem2Img = loadImage("images/gems/line2gem2.png");
    levelTwoGem3Img = loadImage("images/gems/line2gem3.png");
    levelTwoGem4Img = loadImage("images/gems/line2gem4.png");
    levelTwoGem5Img = loadImage("images/gems/line2gem5.png");


    //treasure;
    treasureImg = loadImage("images/t/treasureImg.png");

    //soundloading-------------------------------------------------------------
    //intro;
    introSound = loadSound("images/sounds/sound.mp3");
    crystalCollectSound = loadSound("images/sounds/collect.mp3");
    treausreCollectingSound = loadSound("images/sounds/treasureCollectingSound.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges1 = createEdgeSprites();
  edges2 = createEdgeSprites();
  edges3 = createEdgeSprites();
  

  start();
  controlPageSprite();
  storyPageSprite();
  levelOneSprite();
  levelTwoSprite();

  player = createSprite(windowWidth-1300,windowHeight-600,50,50);
  player.addAnimation("running",playerStand);  
  player.scale = 0.5;
  player.visible = false;


}

function draw() {
  background(0);
  drawSprites();  

  if(gameState === "start"){
       stroke(255);
       strokeWeight(2);
       fill(255, 10, 84);
       textSize(70);
       textFont("jokerman");
       text("FrazerAndTreasure",windowWidth-1000,windowHeight-550);
       startlevel();
  }

  
  if(gameState === "level-1"){
       levelOne();   
  }

  if(gameState === "level-2"){
       levelTwo();
  }
  
  if(gameState === "level-3"){
      levelThree();
  }

  if(gameState === "control"){
       controlPage();
  }

  if(gameState === "story"){
       storyPage();
  }

}

function start(){
  welcomePage = createSprite(width/2,height/2+100,windowWidth,windowHeight);
  welcomePage.addImage("welcomepage",welcomePageImg);
  welcomePage.scale = 1;
  welcomePage.visible = false;

  playButton = createSprite(windowWidth-682,windowHeight-240);
  playButton.addImage("startbutton",playButtonImg);
  playButton.scale = 1;
  playButton.visible = false;

  controlButton = createSprite(windowWidth-682,windowHeight-170);
  controlButton.addImage("controlsArea",controlButtonImg);
  controlButton.scale = 1;
  controlButton.visible = false;

  storyButton = createSprite(windowWidth-682,windowHeight-100);
  storyButton.addImage("storyInformation",storyButtonImg);
  storyButton.scale = 1;
  storyButton.visible = false;

  //introSound.play();

  

}

function controlPageSprite(){

  controlInformation = createSprite(width/2,height/2,windowWidth,windowHeight);
  controlInformation.addImage(controlInformationImg);
  controlInformation.visible = false;

  closeButton = createSprite(windowWidth-100,windowHeight-570,50,50);
  closeButton.addImage("option",closeButtonImg);
  closeButton.scale = 0.3;
  closeButton.visible = false;

}
function storyPageSprite(){

  story = createSprite(width/2-350,height/2-130);
  story.addImage(storyImg);
  story.visible = false;

}
function levelOneSprite(){
  forest = createSprite(width/2,height/2,windowWidth,windowHeight);
  forest.addImage("level-1",forestImg);
  forest.scale = 3;
  forest.visible = false;

  InsLevelOneGround = createSprite(windowWidth-680 ,windowHeight-10,1360,30);
  InsLevelOneGround.visible = false;

  InsLevelOneTrack1 = createSprite(windowWidth-1207,windowHeight-475,300,30);
  InsLevelOneTrack2 = createSprite(windowWidth-600,windowHeight-300,300,30);
  InsLevelOneTrack3 = createSprite(windowWidth-300,windowHeight-300,300,30);

  InsLevelOneTrack1.visible = false;
  InsLevelOneTrack2.visible = false;
  InsLevelOneTrack3.visible = false;

  levelOneGem1 = createSprite(windowWidth-1100,windowHeight-510,20,20);
  levelOneGem1.addImage(levelOneGem1Img);
  levelOneGem1.scale = 0.5;
  levelOneGem1.visible = false;

  levelOneGem2 = createSprite(windowWidth-1112,windowHeight-60,20,20);
  levelOneGem2.addImage(levelOneGem2Img);
  levelOneGem2.scale = 0.5;
  levelOneGem2.visible = false;

  levelOneGem3 = createSprite(windowWidth-1080,windowHeight-60,20,20);
  levelOneGem3.addImage(levelOneGem3Img);
  levelOneGem3.scale = 0.5;
  levelOneGem3.visible = false;

  levelOneGem4 = createSprite(windowWidth-1050,windowHeight-60,20,20);
  levelOneGem4.addImage(levelOneGem4Img);
  levelOneGem4.scale = 0.5;
  levelOneGem4.visible = false;

  levelOneGem5 = createSprite(windowWidth-800,windowHeight-60,20,20);
  levelOneGem5.addImage(levelOneGem5Img);
  levelOneGem5.scale = 0.5;
  levelOneGem5.visible = false;

  levelOneGem6 = createSprite(windowWidth-770,windowHeight-60,20,20);
  levelOneGem6.addImage(levelOneGem1Img);
  levelOneGem6.scale = 0.5;
  levelOneGem6.visible = false;

  levelOneGem7 = createSprite(windowWidth-740,windowHeight-60,20,20);
  levelOneGem7.addImage(levelOneGem2Img);
  levelOneGem7.scale = 0.5;
  levelOneGem7.visible = false;

  levelOneGem8 = createSprite(windowWidth-600,windowHeight-60,20,20);
  levelOneGem8.addImage(levelOneGem3Img);
  levelOneGem8.scale = 0.5;
  levelOneGem8.visible = false;

  levelOneGem9 = createSprite(windowWidth-470,windowHeight-60,20,20);
  levelOneGem9.addImage(levelOneGem4Img);
  levelOneGem9.scale = 0.5;
  levelOneGem9.visible = false;

  levelOneGem10 = createSprite(windowWidth-440,windowHeight-60,20,20);
  levelOneGem10.addImage(levelOneGem5Img);
  levelOneGem10.scale = 0.5;
  levelOneGem10.visible = false;

  levelOneGem11 = createSprite(windowWidth-410,windowHeight-60,20,20);
  levelOneGem11.addImage(levelOneGem3Img);
  levelOneGem11.scale = 0.5;
  levelOneGem11.visible = false;
  
  mainMenuButton = createSprite(windowWidth-50,windowHeight-590,40,40);
  mainMenuButton.addImage(mainMenuButtonImg);
  mainMenuButton.scale = 0.5;
  mainMenuButton.visible = false;

  treasure = createSprite(windowWidth-450,windowHeight-336,50,50);
  treasure.addImage(treasureImg);
  treasure.scale = 0.15;
  treasure.visible = false;

  FinishFlagInswall = createSprite(windowWidth-80,windowHeight-75,50,100);
  FinishFlagInswall.visible = false;
  
}
function levelTwoSprite(){

  snow = createSprite(width/2,height/2,windowWidth,windowHeight);
  snow.addImage("level-2",snowImg);
  snow.scale = 2.5;
  snow.visible = false;

  player1 = createSprite(windowWidth-100,windowHeight-600,50,50);
  player1.addAnimation("running",playerStand);
  player1.scale = 0.5;
  player1.visible = false;

  levelTwotriangleP1 = createSprite(windowWidth-810,windowHeight-480,20,110);
  levelTwotriangleP1.shapeColor = rgb(255, 202, 24)
  levelTwotriangleP1.rotation = 25;
  levelTwotriangleP1.visible = false;

  levelTwotriangleP2 = createSprite(windowWidth-590,windowHeight-480,20,110);
  levelTwotriangleP2.shapeColor = rgb(255, 202, 24)
  levelTwotriangleP2.rotation = -25;
  levelTwotriangleP2.visible = false;

  levelTwotriangleP3 = createSprite(windowWidth-700,windowHeight-420,300,30);
  levelTwotriangleP3.addImage(levelTwolockImg);
  levelTwotriangleP3.scale = 0.4;
  levelTwotriangleP3.visible = false;

  levelTwoTrack1 = createSprite(windowWidth-100,windowHeight-460,300,30);
  levelTwoTrack1.addImage(levelTwoTrackImg);
  levelTwoTrack1.scale = 0.6;
  levelTwoTrack1.visible = false;

  levelTwoTrack2 = createSprite(windowWidth-1270,windowHeight-520,300,30);
  levelTwoTrack2.addImage(levelTwoTrackImg);
  levelTwoTrack2.scale = 0.6;
  levelTwoTrack2.mirrorX(-1);
  levelTwoTrack2.visible = false;

  levelTwoRounderOB = createSprite(windowWidth-700,windowHeight-575,50,50);
  levelTwoRounderOB.addImage(levelTwoRounderOBImg);
  levelTwoRounderOB.scale = 0.35;
  levelTwoRounderOB.visible = false;

  treasure1 = createSprite(windowWidth-700,windowHeight-465,50,50);
  treasure1.addImage(treasureImg);
  treasure1.scale = 0.15;
  treasure1.visible = false;

  levelTwoTrack3 = createSprite(windowWidth-300,windowHeight-380,300,30);
  levelTwoTrack3.addImage(levelTwoTrackImg);
  levelTwoTrack3.scale = 0.6;
  levelTwoTrack3.visible = false;

  levelTwoTrack4 = createSprite(windowWidth-480,windowHeight-250,300,30);
  levelTwoTrack4.addImage(levelTwoTrackImg);
  levelTwoTrack4.scale = 0.6;
  levelTwoTrack4.visible = false;

  levelTwoTrack5 = createSprite(windowWidth-700,windowHeight-300,300,30);
  levelTwoTrack5.addImage(levelTwoTrackImg);
  levelTwoTrack5.scale = 0.6;
  levelTwoTrack5.visible = false;

  levelTwoTrack6 = createSprite(windowWidth-398,windowHeight-335,20,150);
  levelTwoTrack6.shapeColor = (255);
  levelTwoTrack6.visible = false;

  levelTwoGround = createSprite(windowWidth-680,windowHeight-10,1360,30);
  levelTwoGround.visible = false;

  levelTwoTrack7 = createSprite(windowWidth-1100,windowHeight-100,30,350);
  levelTwoTrack7.shapeColor = "white";
  levelTwoTrack7.visible = false;

  levelTwoTrack8 = createSprite(windowWidth-100,windowHeight-300,300,30);
  levelTwoTrack8.addImage(levelTwoTrack1Img);
  levelTwoTrack8.scale = 0.5;
  levelTwoTrack8.visible = false;

  levelTwoOB1 = createSprite(windowWidth-105,windowHeight-170,300,30);
  levelTwoOB1.addImage(levelTwoOBImg);
  levelTwoOB1.scale = 0.7;
  levelTwoOB1.visible = false;

  levelTwoTrack9 = createSprite(windowWidth-250,windowHeight-170,300,30);
  levelTwoTrack9.addImage(levelTwoTrack1Img);
  levelTwoTrack9.scale = 0.5;
  levelTwoTrack9.visible = false;

  levelTwolockKey = createSprite(windowWidth-100,windowHeight-350,300,30);
  levelTwolockKey.addImage(levelTwolockKeyImg);
  levelTwolockKey.scale = 0.2;
  levelTwolockKey.visible = false;

  levelTwoFinishFlag = createSprite(windowWidth-1300,windowHeight-580,50,100);
  levelTwoFinishFlag.addImage(FinishFlagImg);
  levelTwoFinishFlag.scale = 0.28;
  levelTwoFinishFlag.mirrorX(-1);
  levelTwoFinishFlag.visible = false;

  levelTwoSnakeOB = createSprite(windowWidth-500,windowHeight-80,30,30);
  levelTwoSnakeOB.shapeColor = "red";
  levelTwoSnakeOB.velocityX = 6;
  levelTwoSnakeOB.visible = false;

  levelTwoTrack10 = createSprite(windowWidth-1250,windowHeight-200,300,30);
  levelTwoTrack10.addImage(levelTwoTrack1Img);
  levelTwoTrack10.scale = 0.5;
  levelTwoTrack10.visible = false;

  levelTwoGem1 = createSprite(windowWidth-270,windowHeight-430,20,20);
  levelTwoGem1.addImage(levelTwoGem1Img);
  levelTwoGem1.scale = 0.5;
  levelTwoGem1.visible = false;
  
  levelTwoGem2 = createSprite(windowWidth-300,windowHeight-430,20,20);
  levelTwoGem2.addImage(levelTwoGem2Img);
  levelTwoGem2.scale = 0.5;
  levelTwoGem2.visible = false;

  levelTwoGem3 = createSprite(windowWidth-330,windowHeight-430,20,20);
  levelTwoGem3.addImage(levelTwoGem3Img);
  levelTwoGem3.scale = 0.5;
  levelTwoGem3.visible = false;

  levelTwoGem4 = createSprite(windowWidth-445,windowHeight-300,20,20);
  levelTwoGem4.addImage(levelTwoGem4Img);
  levelTwoGem4.scale = 0.5;
  levelTwoGem4.visible = false;

  levelTwoGem5 = createSprite(windowWidth-475,windowHeight-300,20,20);
  levelTwoGem5.addImage(levelTwoGem5Img);
  levelTwoGem5.scale = 0.5;
  levelTwoGem5.visible = false;

  levelTwoGem6 = createSprite(windowWidth-505,windowHeight-300,20,20);
  levelTwoGem6.addImage(levelTwoGem1Img);
  levelTwoGem6.scale = 0.5;
  levelTwoGem6.visible = false;

  levelTwoGem7 = createSprite(windowWidth-650,windowHeight-350,20,20);
  levelTwoGem7.addImage(levelTwoGem2Img);
  levelTwoGem7.scale = 0.5;
  levelTwoGem7.visible = false;

  levelTwoGem8 = createSprite(windowWidth-680,windowHeight-350,20,20);
  levelTwoGem8.addImage(levelTwoGem3Img);
  levelTwoGem8.scale = 0.5;
  levelTwoGem8.visible = false;

  levelTwoGem9 = createSprite(windowWidth-720,windowHeight-350,20,20);
  levelTwoGem9.addImage(levelTwoGem4Img);
  levelTwoGem9.scale = 0.5;
  levelTwoGem9.visible = false;

  levelTwoGem10 = createSprite(windowWidth-1225,windowHeight-250,20,20);
  levelTwoGem10.addImage(levelTwoGem1Img);
  levelTwoGem10.scale = 0.5;
  levelTwoGem10.visible = false;

  levelTwoGem11 = createSprite(windowWidth-1255,windowHeight-250,20,20);
  levelTwoGem11.addImage(levelTwoGem1Img);
  levelTwoGem11.scale =  0.5;
  levelTwoGem11.visible = false;

  levelTwoGem12 = createSprite(windowWidth-230,windowHeight-210,20,20);
  levelTwoGem12.addImage(levelTwoGem2Img);
  levelTwoGem12.scale = 0.5;
  levelTwoGem12.visible = false;

  levelTwoGem13 = createSprite(windowWidth-260,windowHeight-210,20,20);
  levelTwoGem13.addImage(levelTwoGem3Img);
  levelTwoGem13.scale = 0.5;
  levelTwoGem13.visible = false;

  lev2Heart1 = createSprite(windowWidth-1100,windowHeight-600,20,20);
  lev2Heart1.addImage(heartImg);
  lev2Heart1.scale = 0.15;
  lev2Heart1.visible = false;

  lev2Heart2 = createSprite(windowWidth-1050,windowHeight-600,20,20);
  lev2Heart2.addImage(heartImg);
  lev2Heart2.scale = 0.15;
  lev2Heart2.visible = false;

  lev2Heart3 = createSprite(windowWidth-1000,windowHeight-600,20,20);
  lev2Heart3.addImage(heartImg);
  lev2Heart3.scale = 0.15;
  lev2Heart3.visible = false;

  lev2Heart4 = createSprite(windowWidth-950,windowHeight-600,20,20);
  lev2Heart4.addImage(heartImg);
  lev2Heart4.scale = 0.15;
  lev2Heart4.visible = false;

  lev2Heart5 = createSprite(windowWidth-900,windowHeight-600,20,20);
  lev2Heart5.addImage(heartImg);
  lev2Heart5.scale = 0.15;
  lev2Heart5.visible = false;


}
function startlevel(){
 
  welcomePage.visible = true;
  playButton.visible = true;
  controlButton.visible = true;
  storyButton.visible = true;

  if(mousePressedOver(playButton)){
    gameState = "level-2";
    player.x = windowWidth-1300;
    player.y = windowHeight-600;
    onescore = 0;
    
    treasure = createSprite(windowWidth-450,windowHeight-336,50,50);
    treasure.addImage(treasureImg);
    treasure.scale = 0.15;
    treasure.visible = false;  

    levelOneGem1 = createSprite(windowWidth-1100,windowHeight-510,20,20);
    levelOneGem1.addImage(levelOneGem1Img);
    levelOneGem1.scale = 0.5;
    levelOneGem1.visible = false;
    levelOneGem2 = createSprite(windowWidth-1112,windowHeight-60,20,20);
    levelOneGem2.addImage(levelOneGem2Img);
    levelOneGem2.scale = 0.5;
    levelOneGem2.visible = false;
    levelOneGem3 = createSprite(windowWidth-1080,windowHeight-60,20,20);
    levelOneGem3.addImage(levelOneGem3Img);
    levelOneGem3.scale = 0.5;
    levelOneGem3.visible = false;
    levelOneGem4 = createSprite(windowWidth-1050,windowHeight-60,20,20);
    levelOneGem4.addImage(levelOneGem4Img);
    levelOneGem4.scale = 0.5;
    levelOneGem4.visible = false;
    levelOneGem5 = createSprite(windowWidth-800,windowHeight-60,20,20);
    levelOneGem5.addImage(levelOneGem5Img);
    levelOneGem5.scale = 0.5;
    levelOneGem5.visible = false;
    levelOneGem6 = createSprite(windowWidth-770,windowHeight-60,20,20);
    levelOneGem6.addImage(levelOneGem1Img);
    levelOneGem6.scale = 0.5;
    levelOneGem6.visible = false;
    levelOneGem7 = createSprite(windowWidth-740,windowHeight-60,20,20);
    levelOneGem7.addImage(levelOneGem2Img);
    levelOneGem7.scale = 0.5;
    levelOneGem7.visible = false;
    levelOneGem8 = createSprite(windowWidth-600,windowHeight-60,20,20);
    levelOneGem8.addImage(levelOneGem3Img);
    levelOneGem8.scale = 0.5;
    levelOneGem8.visible = false;
    levelOneGem9 = createSprite(windowWidth-470,windowHeight-60,20,20);
    levelOneGem9.addImage(levelOneGem4Img);
    levelOneGem9.scale = 0.5;
    levelOneGem9.visible = false;
    levelOneGem10 = createSprite(windowWidth-440,windowHeight-60,20,20);
    levelOneGem10.addImage(levelOneGem5Img);
    levelOneGem10.scale = 0.5;
    levelOneGem10.visible = false;
    levelOneGem11 = createSprite(windowWidth-410,windowHeight-60,20,20);
    levelOneGem11.addImage(levelOneGem3Img);
    levelOneGem11.scale = 0.5;
    levelOneGem11.visible = false;

  }
  if(mousePressedOver(controlButton)){
       gameState = "control";
  }
  if(mousePressedOver(storyButton)){
       gameState = "story";
  }
  
}

function controlPage(){
  welcomePage.visible = false;
  playButton.visible = false;
  controlButton.visible = false;
  storyButton.visible = false;
  
  closeButton.visible = true;
  controlInformation.visible = true;
  
  if(mousePressedOver(closeButton)){
     gameState = "start";
     controlInformation.visible = false;
     closeButton.visible = false;
  }

}
function storyPage(){
  welcomePage.visible = false;
  playButton.visible = false;
  controlButton.visible = false;
  storyButton.visible = false;


  closeButton.visible = true;
  story.visible = true;

  if(mousePressedOver(closeButton)){
     gameState = "start";
     closeButton.visible = false;
     story.visible = false;
  }
  
  textSize(45)
  fill(255,0,0);
  text(" FRAZER is an archeologist.",windowWidth-600,windowHeight-400);
  fill(255, 127, 0);
  text(" His, job is to discover the ",windowWidth-600,windowHeight-350);
  fill(255, 255, 0);
  text(" olden things.",windowWidth-600,windowHeight-300);
  fill( 0, 255, 0);
  text(" When he came to know that there are",windowWidth-1050,windowHeight-160);
  fill( 0, 0, 255);
  text(" treasures in his working place.",windowWidth-1050,windowHeight-110);
  fill( 75, 0, 130);
  text(" So, he  decided",windowWidth-1050,windowHeight-60);
  fill(148, 0, 211);
  text(" to find the treasures.",windowWidth-700,windowHeight-60);

}
function levelOne(){

  player.bounceOff(edges1);

  textSize(35)
  fill(255);
  text(" " + onescore,windowWidth-940,windowHeight-565);

  image(scoreImg,windowWidth-1000,windowHeight-600,60,40);

  welcomePage.visible = false;
  playButton.visible = false;
  controlButton.visible = false;
  storyButton.visible = false;
  forest.visible = true;
  
  mainMenuButton.visible = true;

  player.collide(InsLevelOneGround);
  
  player.collide(InsLevelOneTrack1);
  player.collide(InsLevelOneTrack2);
  player.collide(InsLevelOneTrack3);

  levelOneGem1.visible = true;
  levelOneGem2.visible = true;
  levelOneGem3.visible = true;
  levelOneGem4.visible = true;
  levelOneGem5.visible = true;
  levelOneGem6.visible = true;
  levelOneGem7.visible = true;
  levelOneGem8.visible = true;
  levelOneGem9.visible = true;
  levelOneGem10.visible = true;
  levelOneGem11.visible = true;

  treasure.visible = true;

  player.visible = true;
    

  //InsLevelOneGround.debug = true; 
  //treasure.debug = true;
  //player.debug = true;
  
  //track one ;
  image(levelOneTrackImg,windowWidth-1380,windowHeight-540,levelOneTrackImg.width,levelOneTrackImg.height);
  //track two;
  image(levelOneTrackImg,windowWidth-750,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);
  //track three;
  image(levelOneTrackImg,windowWidth-470,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);

  //ground;
  image(levelOneTrackImg,windowWidth-1380,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
  image(levelOneTrackImg,windowWidth-1057,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
  image(levelOneTrackImg,windowWidth-735,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
  image(levelOneTrackImg,windowWidth-413,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
  image(levelOneTrackImg,windowWidth-90,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);

  //finishflag;
  image(FinishFlagImg,windowWidth-140,windowHeight-128,60,100);

  if(mousePressedOver(mainMenuButton)){
      gameState = "start"
      mainMenuButton.visible = false;
      player.visible = false;
      treasure.destroy();
      forest.visible = false;
      levelOneGem1.destroy();
      levelOneGem2.destroy();
      levelOneGem3.destroy();
      levelOneGem4.destroy();
      levelOneGem4.destroy();
      levelOneGem5.destroy();
      levelOneGem6.destroy();
      levelOneGem7.destroy();
      levelOneGem8.destroy();
      levelOneGem9.destroy();
      levelOneGem10.destroy();
      levelOneGem11.destroy();
      
  }


  if(keyDown("right") || keyDown("D")){
    player.x = player.x + 10;
    player.addAnimation("running",playerSideWays);
    player.mirrorX(-1);
    player.setCollider("rectangle",0,0,302,390);
    player.scale = 0.18;
 }
 

  if(keyDown("left") || keyDown("A")){
     player.x = player.x - 10;
     player.addAnimation("running",playerSideWays);
     player.mirrorX(+1);
     player.scale = 0.18;
     
 }
  console.log(player.y);
  if(keyDown("UP_ARROW") || keyDown("W")){
    if(player.y >=90 && player.y <=250 || (player.y >=365 && player.y <=400) || (player.y >=400 && player.y < 600)){
      player.velocityY = -13;
    }
    
  }
    player.velocityY = player.velocityY + 0.8;
    
  if(player.isTouching(levelOneGem1)){
     onescore = onescore + 1
     levelOneGem1.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem2)){
     onescore = onescore + 1
     levelOneGem2.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem3)){
     onescore = onescore + 1
     levelOneGem3.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem4)){
     onescore = onescore + 1
     levelOneGem4.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem5)){
     onescore = onescore + 5;
     levelOneGem5.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem6)){
     onescore = onescore + 1
     levelOneGem6.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem7)){
     onescore = onescore + 1
     levelOneGem7.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem8)){
     onescore = onescore + 1
     levelOneGem8.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem9)){
     onescore = onescore + 1
     levelOneGem9.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem10)){
     onescore = onescore + 5;
     levelOneGem10.destroy();
     crystalCollectSound.play();
  }
  if(player.isTouching(levelOneGem11)){
     onescore = onescore + 1;
     levelOneGem11.destroy();
     crystalCollectSound.play();
  }
  
  if(onescore === 19){
    if(player.isTouching(FinishFlagInswall)){
      gameState = "level-2";
   }
  }
  if(onescore !== 19){
    if(player.isTouching(FinishFlagInswall)){
      textSize(50);
      textFont("cooper");
      fill("red");
      text("Note! Catch all crystals",windowWidth-1000,windowHeight-500);
    }
  }

  if(player.isTouching(treasure)){
      treasure.destroy();
      treausreCollectingSound.play();
      
  }
  
  
 

}

function player1Life(){
  if(player1.isTouching(levelTwoRounderOB)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
 }
 if(player1.isTouching(levelTwoOB1)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
 }
 if(player1.isTouching(levelTwoSnakeOB)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
 }
 if(levelTwoLife === 4){
    lev2Heart5.destroy();
 }
 if(levelTwoLife === 3){
    lev2Heart4.destroy();
 }
 if(levelTwoLife === 2){
    lev2Heart3.destroy();
 }
 if(levelTwoLife === 1){
    lev2Heart2.destroy();
 }
 if(levelTwoLife === 0){
    lev2Heart1.destroy();
 }

 
 
}
function levelTwo(){

  
  player.destroy();
  player1.visible = true;
  
  
  
  player1.bounceOff(edges2);

  treasure.destroy();
  forest.destroy();
  FinishFlagInswall.destroy();
  InsLevelOneGround.destroy();
  InsLevelOneTrack1.destroy();
  InsLevelOneTrack2.destroy();
  InsLevelOneTrack3.destroy();
 
  snow.visible = true;

  levelTwotriangleP1.visible = true;
  levelTwotriangleP2.visible = true;
  levelTwotriangleP3.visible = true;

  levelTwoGround.visible = true;
  //display images for ground;
  image(levelTwoTrackImg,windowWidth-1360,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-1121,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-882,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-643,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-404,windowHeight-40,250,50);
  image(levelTwoTrackImg,windowWidth-165,windowHeight-40,250,50);

  levelTwoTrack1.visible = true;
  levelTwoTrack2.visible = true;
  levelTwoTrack3.visible = true;
  levelTwoTrack4.visible = true;
  levelTwoTrack5.visible = true;
  levelTwoTrack6.visible = true;
  levelTwoTrack7.visible = true;
  levelTwoTrack8.visible = true;
  levelTwoTrack9.visible = true;
  levelTwoTrack10.visible = true;

  levelTwolockKey.visible = true;
  

  levelTwoRounderOB.visible = true;
  levelTwoRounderOB.setCollider("circle",0,0,110)
  levelTwoRounderOB.rotation = levelTwoRounderOB.rotation + 3;

  levelTwoSnakeOB.bounceOff(edges2);

  levelTwoOB1.visible = true;
  levelTwoSnakeOB.visible = true;
  
  

  levelTwoFinishFlag.visible = true;
  levelTwoFinishFlag.debug = true;
  levelTwoFinishFlag.setCollider("rectangle",-70,0,80,280)

  treasure1.visible = true;
  
  player1.collide(levelTwotriangleP1);
  player1.collide(levelTwotriangleP2);
  player1.collide(levelTwotriangleP3);
  player1.collide(levelTwoGround);
  player1.collide(levelTwoTrack1);
  player1.collide(levelTwoTrack2); 
  player1.collide(levelTwoTrack3);
  player1.collide(levelTwoTrack4);
  player1.collide(levelTwoTrack5);                
  player1.collide(levelTwoTrack6);
  player1.collide(levelTwoTrack7);
  player1.collide(levelTwoTrack8);
  player1.collide(levelTwoTrack9);

  levelTwoGem1.visible = true;
  levelTwoGem2.visible = true;
  levelTwoGem3.visible = true;
  levelTwoGem4.visible = true;
  levelTwoGem5.visible = true;
  levelTwoGem6.visible = true;
  levelTwoGem7.visible = true;
  levelTwoGem8.visible = true;
  levelTwoGem9.visible = true;
  levelTwoGem10.visible = true;
  levelTwoGem11.visible = true;
  levelTwoGem12.visible = true;
  levelTwoGem13.visible = true;

  lev2Heart1.visible = true;
  lev2Heart2.visible = true;
  lev2Heart3.visible = true;
  lev2Heart4.visible = true;
  lev2Heart5.visible = true;

  player1Life();

  if(keyDown("right") || keyDown("D")){
    player1.x = player1.x + 10;
    player1.addAnimation("running",playerSideWays)
    player1.mirrorX(-1);
    player1.setCollider("rectangle",0,0,302,390);
    player1.scale = 0.18;
  }
  if(keyDown("left") || keyDown("A")){
    player1.x = player1.x - 10;
    player1.addAnimation("running",playerSideWays);
    player1.mirrorX(+1);
    player1.setCollider("rectangle",0,0,302,390);
    player1.scale = 0.18;
    
}
  if(keyDown("UP_ARROW") || (keyDown("W"))){
    player1.velocityY = -13;
  }

  player1.velocityY = player1.velocityY + 0.8;
 
  if(player1.isTouching(levelTwolockKey)){
     levelTwolockKey.destroy();
     levelTwotriangleP3.destroy();
  }
  if(player1.isTouching(treasure1)){
     treasure1.destroy();
     treausreCollectingSound.play();
  }
  
  if(player1.isTouching(levelTwoFinishFlag)){
      gameState = "level-3";
  }

}
function levelThree(){

}