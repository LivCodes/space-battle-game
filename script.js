import { canGridVertical, canGridHorizontal } from "./canvas-grid.js";
import { drawText } from "./text.js";
import { stickFigure } from "./stickFig.js";

const msg = "Space Battle";
const canvas = document.getElementById("space-battle"); 
const context = canvas.getContext("2d"); 

context.strokeStyle = 'lightgrey'; // the border line
context.fillStyle = 'black'; // fill the square
context.lineWidth = 10; // width of the border line
context.rect(50, 50, canvas.width - 100, canvas.height - 100); // inner black box
context.stroke();
context.fill(); // draw the fill the sq lines

// add text 
drawText();

//stick figure
stickFigure();

// Grid drawing code goes here
context.strokeStyle = "#00FF00";
context.lineWidth = 0.25;
canGridVertical();
canGridHorizontal();
context.stroke();

export{context, canvas, msg};