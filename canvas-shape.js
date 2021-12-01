import{context, canvas} from './script.js';

const canvasShape = () => {
    context.strokeStyle = 'lightgrey'; // the border line
    context.fillStyle = 'black'; // fill the square
    context.lineWidth = 10; // width of the border line
    context.rect(50, 50, canvas.width - 100, canvas.height - 100); // inner black box
    context.stroke();
    context.fill(); // draw the fill the sq lines
}

export {canvasShape}