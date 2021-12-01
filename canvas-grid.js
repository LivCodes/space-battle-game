import{context, canvas} from './script.js';

const canGridVertical = () => {
    for(var x = 0; x < canvas.width; x += 10) { 
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
    }
}
const canGridHorizontal = () => {
    for(let y = 0; y < canvas.height; y += 10) { 
        context.moveTo(0, y); 
        context.lineTo(canvas.width, y);
    }
}

export {canGridVertical, canGridHorizontal};