import { draw_grid } from "./canvas-grid.js";
import { drawText } from "./text.js";
import { stickFigure } from "./stickFig.js";
import { canvasShape } from "./canvas-shape.js";

const msg = "Space Battle";
const canvas = document.getElementById("space-battle"); 
const context = canvas.getContext("2d"); 

canvasShape(); //draw the canvas square
drawText(); // add text
stickFigure(); //stick figure
// draw_grid(context, 10 , 50, "#00FF00", "yellow"); //draws grid
draw_grid(context, 10, 50, 'red', 'yellow');


  
  context.beginPath();
  context.strokeStyle = "#FFFFFF";
  context.fillStyle = "#00FF00";
  context.lineWidth = 2;
  context.font = "20px Sans-Serif";
  context.moveTo(50, 50);
  context.bezierCurveTo(0, 0, 80, 250, 150, 250);
  context.bezierCurveTo(250, 250, 250, 250, 250, 170);
  context.bezierCurveTo(250, 50, 400, 350, 320, 280);
  context.closePath();
  // context.fill();
  context.stroke();
  context.fillText("(50, 50)", 30, 40);
  context.fillText("(150, 250)", 130, 260);
  context.fillText("(250, 170)", 255, 175);
  context.beginPath()
  context.moveTo(50, 250);
  context.quadraticCurveTo(25, 300, 50, 350);
  context.quadraticCurveTo(100, 375, 150, 350);
  context.closePath();
  context.moveTo(230, 360);
  context.quadraticCurveTo(255, 340, 270, 360);
  context.quadraticCurveTo(255, 340, 270, 310);
  context.closePath();
  context.moveTo(250, 50);
  context.quadraticCurveTo(310, 160, 370, 50);
  context.quadraticCurveTo(400, 75, 370, 100);
  context.closePath();
  context.strokeStyle = "#FFFF00";
  context.fillStyle = "#000000";
  context.fill();
  context.stroke();


export{context, canvas, msg};
