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


export{context, canvas, msg};
