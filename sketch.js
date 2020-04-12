var gameState = 0;
var playerCount;
var database;
var game;
var player;
var form;



function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
  
}

