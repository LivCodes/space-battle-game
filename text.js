import{context, msg} from './script.js';

const drawText = () => {
    // add text 
    context.font = "45px Sans-Serif";
    context.fillStyle = "blue"; 
    context.strokeStyle = 'green';
    context.strokeText(msg, 60, 100);
    context.fillText(msg, 60, 100);
}

export {drawText}