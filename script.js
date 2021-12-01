const msg= "Space Battle"

var canvas = document.getElementById("space-battle"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = 'lightgrey'; // the border line
context.fillStyle = 'black'; // fill the square
context.lineWidth = 10; // width of the border line
context.rect(50, 50, canvas.width - 100, canvas.height - 100); // inner black box
context.stroke();
context.fill(); // draw the fill the sq lines

// add text 
context.font = "45px Sans-Serif";
context.fillStyle = "blue"; 
context.strokeStyle = 'green';
context.strokeText(msg, 60, 100);
context.fillText(msg, 60, 100);

//stick figure
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



