// grab an element called canvas
var canvas = document.querySelector("canvas");

// grab the window's inner width and height and set it as the canvas' width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// return a drawing context to the variable context
// context is used to store a lot of functionalities that can be used to draw within the canvas
var context = canvas.getContext("2d");

// a method inside canvas context that allows you to draw a rectangle inside the canvas
context.fillRect(100, 100, 100, 100);
console.log(canvas);
