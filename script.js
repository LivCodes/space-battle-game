console.log("Space Battle")

var canvas = document.getElementById("asteroids"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = 'black'; // the border line
context.lineWidth = 15; // width of the border line
context.fillStyle = 'black'; // fill the square
context.rect(50, 50, 800, 650); // inner black box
context.stroke();
context.fill(); // draw the fill the sq lines