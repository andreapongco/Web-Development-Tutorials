// grab an element called canvas
var canvas = document.querySelector("canvas");

// grab the window's inner width and height and set it as the canvas' width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// return a drawing context to the variable context
// context is used to store a lot of functionalities that can be used to draw within the canvas
var context = canvas.getContext("2d");

// a method inside canvas context that allows you to draw a rectangle inside the canvas
for (let index = 0; index < 5; index++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  context.fillStyle = "blue";
  context.fillRect(x, y, 100, 100);
}

// Drawing a line
for (let i = 0; i < 2; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  context.beginPath();
  context.moveTo(x, y);
  context.moveTo(400 + x, 100 + y);
  context.lineTo(300 + x, 200 + y);
  context.lineTo(500 + x, 200 + y);
  context.lineTo(400 + x, 100 + y);
  context.fillStyle = "green";
  context.fill();
  context.strokeStyle = "blue";
  context.stroke();
}

// Arc / Circle
for (let i = 0; i < 3; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  context.beginPath(); // creates a new path to prevent connection from the previous line
  context.arc(x, y, 30, 0, Math.PI * 2, false);
  context.fillStyle = "red";
  context.fill();
  context.strokeStyle = "green";
  context.stroke();
}
