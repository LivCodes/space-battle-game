import { canGridVertical, canGridHorizontal } from "./canvas-grid.js";
import { drawText } from "./text.js";
import { stickFigure } from "./stickFig.js";
import { canvasShape } from "./canvas-shape.js";

const msg = "Space Battle";
const canvas = document.getElementById("space-battle"); 
const context = canvas.getContext("2d"); 

canvasShape(); //draw the canvas square
drawText(); // add text
stickFigure(); //stick figure
canGridVertical(); // vertical grid lines
canGridHorizontal(); // horizontal grid lines
context.stroke(); // draws grid

export{context, canvas, msg};
