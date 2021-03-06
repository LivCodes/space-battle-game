import{context} from './script.js';

const stickFigure = () => {
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 2;
    context.beginPath();
    context.arc(200, 140, 20, 0, Math.PI * 2);
    context.moveTo(200, 160);
    context.lineTo(200, 220);
    context.moveTo(180, 300);
    context.lineTo(185, 260);
    context.lineTo(200, 220);
    context.lineTo(215, 260);
    context.lineTo(220, 300);
    context.moveTo(240, 130);
    context.lineTo(225, 170);
    context.lineTo(200, 170);
    context.lineTo(175, 180);
    context.lineTo(170, 220);
    context.moveTo(220, 300);
    context.lineTo(240,300);
    context.moveTo(180, 300);
    context.lineTo(160, 300);
    context.stroke();
}

export{stickFigure}