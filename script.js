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




