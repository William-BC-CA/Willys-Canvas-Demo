// Check Google Fonts
// document.fonts.load("regular 12px 'Montserrat'").then(function(){
//     context.font = "regular 12px 'Montserrat'";
//     context.fillText("Here's some normal text!",84,380);
//     });

// document.fonts.load("bold 32px 'Montserrat'").then(function(){
//     context.font = "bold 32px 'Montserrat'";
//     context.fillText("Here's some bold text!",84,380);
//     });

// document.fonts.load("bold italic 12px 'Montserrat'").then(function(){
//     context.font = "bold italic 12px 'Montserrat'";
//     context.fillText("Here's some bold italic text!",84,380);
//     });


// Creating the canvas
let createCanvas = document.createElement("canvas");
createCanvas.width = 768;
createCanvas.height = 576;

// Styles to JavaScript, see credits at the bottom of index.html
let border = document.querySelector("#createCanvas");
createCanvas.style.border = "1px solid black";
createCanvas.style.background = "pink";

document.body.appendChild(createCanvas);

let context = createCanvas.getContext('2d');

// For producing images
let windowsXPimg = new Image();
windowsXPimg.src = "images/zongnan-bao-DznqzDPA0WM-unsplash.jpg";

windowsXPimg.onload = function(){
    void context.drawImage(windowsXPimg, 500, 300, 1920, 1080, 300, 15, 500, 300);
}

// Rectangle
context.fillStyle = "#1F4EA6"; // configures colour for rectangle (obtained from searching nerf bullet and using colour picker for the images)
context.fillRect(100, 100, 100, 150); // creates the rectangle

// Arc
context.beginPath(); // starts the path
context.arc(150, 250, 50, 0, Math.PI, false); // creates arc (format is: x, y, rad, start angle, end angle, direction)
context.fillStyle = "#EF493D"; // obtained from searching nerf bullet and using colour picker for the images
context.fill();

// Creating circles
context.beginPath();
context.arc(403, 350, 20, 0, 2*Math.PI, false);
context.fillStyle = "black";
context.fill();

context.beginPath();
context.arc(560, 350, 20, 0, 2*Math.PI, false);
context.fillStyle = "black";
context.fill();

// Line segment happy face
context.beginPath();
context.moveTo(370, 450); // starting point
context.lineTo(485, 500);
context.lineTo(600, 450); // end point
context.stroke();
context.fill();

// Line segment bottle
context.fillStyle = "#C6363D";
context.fillRect(145, 350, 17, 30);

context.beginPath();
context.moveTo(146, 379);
context.lineTo(126, 400);
context.lineTo(126, 500);
context.lineTo(180, 500);
context.lineTo(180, 400);
context.lineTo(160, 379);
context.fillStyle = "#413F40";
context.stroke();
context.fill();

//Second Bottle
context.beginPath();
context.moveTo(245, 340);
context.lineTo(235, 370);
context.lineTo(250, 380);
context.lineTo(260, 350);
context.fillStyle = "#413F40";
context.fill();

context.beginPath();
context.moveTo(235, 370);
context.lineTo(215, 390);
context.lineTo(195, 490);
context.lineTo(230, 510);
context.lineTo(255, 410);
context.lineTo(250, 379);
context.fillStyle = "darkgreen";
context.stroke();
context.fill();