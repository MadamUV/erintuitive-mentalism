import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing-new',
  templateUrl: './drawing-new.component.html',
  styleUrls: ['./drawing-new.component.scss']
})
export class DrawingNewComponent implements OnInit {
  canvas : HTMLCanvasElement;
  bestDataURL : string;
  erinBool : boolean = false;
  imgSetup : string = '';

  constructor() { }

  ngOnInit() {
    var canvas,ctx;
  // Variables to keep track of the mouse position and left-button status 
  var mouseX,mouseY,mouseDown=0;

  // Variables to keep track of the touch position
  var touchX,touchY;

  // Draws a dot at a specific position on the supplied canvas name
  // Parameters are: A canvas context, the x position, the y position, the size of the dot
  function drawDot(ctx,x,y,size) {
      // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)

      // Draw a filled circle
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.fill();
  } 

  // Clear the canvas context using the canvas width and height
  function clearCanvas(canvas,ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Keep track of the mouse button being pressed and draw a dot at current location
  function sketchpad_mouseDown() {
      mouseDown=1;
      drawDot(ctx,mouseX,mouseY,1);
  }

  // Keep track of the mouse button being released
  function sketchpad_mouseUp() {
      mouseDown=0;
  }

  // Keep track of the mouse position and draw a dot if mouse button is currently pressed
  function sketchpad_mouseMove(e) { 
      // Update the mouse co-ordinates when moved
      getMousePos(e);

      // Draw a dot if the mouse button is currently being pressed
      if (mouseDown==1) {
          drawDot(ctx,mouseX,mouseY,4);
      }
  }

  // Get the current mouse position relative to the top-left of the canvas
  function getMousePos(e) {
      if (!e)
          e = event;

      if (e.offsetX) {
          mouseX = e.offsetX - (e.offsetX * 0.25);
          mouseY = e.offsetY;
      }
      else if (e.layerX) {
          mouseX = e.layerX;
          mouseY = e.layerY;
      }
   }

  // Draw something when a touch start is detected
  function sketchpad_touchStart(e) {
      // Update the touch co-ordinates
      getTouchPos(e);

      drawDot(ctx,touchX,touchY,4);

      // Prevents an additional mousedown event being triggered
      //event.preventDefault();
  }

  // Draw something and prevent the default scrolling when touch movement is detected
  function sketchpad_touchMove(e) { 
      // Update the touch co-ordinates
      getTouchPos(e);

      // During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
      drawDot(ctx,touchX,touchY,4); 

      // Prevent a scrolling action as a result of this touchmove triggering.
      //event.preventDefault();
  }

  // Get the touch position relative to the top-left of the canvas
  // When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
  // but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
  // "target.offsetTop" to get the correct values in relation to the top left of the canvas.
  function getTouchPos(e) {
      if (!e)
          e = event;

      if(e.touches) {
          if (e.touches.length == 1) { // Only deal with one finger
              var touch = e.touches[0]; // Get the information for finger #1
              touchX=touch.pageX-touch.target.offsetLeft;
              touchY=touch.pageY-touch.target.offsetTop;
          }
      }
  }

  // Get the specific canvas element from the HTML document
  canvas = document.getElementById('mycanvas');

  // If the browser supports the canvas tag, get the 2d drawing context for this canvas
  if (canvas.getContext)
      ctx = canvas.getContext('2d');

  // Check that we have a valid context to draw on/with before adding event handlers
  if (ctx) {
    ctx.fillStyle = 'black';
    // React to mouse events on the canvas, and mouseup on the entire document
    canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
    canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
    window.addEventListener('mouseup', sketchpad_mouseUp, false);

    // React to touch events on the canvas
    canvas.addEventListener('touchstart', sketchpad_touchStart, false);
    canvas.addEventListener('touchmove', sketchpad_touchMove, false);

    document.getElementById("_black").onfocus = function () {
    ctx.strokeStyle = "black";
    };
    document.getElementById("_white").onfocus = function () {
    ctx.strokeStyle = "white";
    };
    document.getElementById("_darkgray").onfocus = function () {
    ctx.strokeStyle = "darkgray";
    };
    document.getElementById("_gray").onfocus = function () {
    ctx.strokeStyle = "gray";
    };
    document.getElementById("_silver").onfocus = function () {
    ctx.strokeStyle = "silver";
    };
    document.getElementById("_red").onfocus = function () {
    ctx.strokeStyle = "red";
    };
    document.getElementById("_green").onfocus = function () {
    ctx.strokeStyle = "green";
    };
    document.getElementById("_blue").onfocus = function () {
    ctx.strokeStyle = "blue";
    };
    document.getElementById("_brown").onfocus = function () {
    ctx.strokeStyle = "brown";
    };
    document.getElementById("_yellow").onfocus = function () {
    ctx.strokeStyle = "yellow";
    };
    document.getElementById("_cyan").onfocus = function () {
    ctx.strokeStyle = "cyan";
    };
    document.getElementById("_magenta").onfocus = function () {
    ctx.strokeStyle = "magenta";
    };
    document.getElementById("_darkred").onfocus = function () {
    ctx.strokeStyle = "#300";
    };
    document.getElementById("_purple").onfocus = function () {
    ctx.strokeStyle = "purple";
    };
    document.getElementById("_gold").onfocus = function () {
    ctx.strokeStyle = "gold";
    };
    document.getElementById("_indigo").onfocus = function () {
    ctx.strokeStyle = "indigo";
    };
    document.getElementById("_olive").onfocus = function () {
    ctx.strokeStyle = "olive";
    };
    document.getElementById("_#674").onfocus = function () {
    ctx.strokeStyle = "#674";
    };
    document.getElementById("_lightYellow").onfocus = function () {
    ctx.strokeStyle = "lightyellow";
    };
    document.getElementById("_pink").onfocus = function () {
    ctx.strokeStyle = "pink";
    };
    document.getElementById("_lightBlue").onfocus = function () {
    ctx.strokeStyle = "lightblue";
    };
    document.getElementById("_beige").onfocus = function () {
    ctx.strokeStyle = "beige";
    };
    document.getElementById("_tan").onfocus = function () {
    ctx.strokeStyle = "tan";
    };
    document.getElementById("_orange").onfocus = function () {
    ctx.strokeStyle = "orange";
    };
  }
}
  saveDrawing() {
    this.canvas = <HTMLCanvasElement> document.getElementById('mycanvas'); //modified to cast
    //var ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    this.bestDataURL = this.canvas.toDataURL();
  }
}