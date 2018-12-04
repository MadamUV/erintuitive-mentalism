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
    this.canvas = <HTMLCanvasElement> document.getElementById('canvas2'); //modified to cast
    this.bestDataURL = this.canvas.toDataURL();
    var ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    ctx.strokeStyle = "black";
    var drawing = false;

    //last coords before current move 
    var lastX;
    var lastY;

    var touchX;
    var touchY;

    this.canvas.onmousedown = function(event){
      lastX = event.offsetX;
      lastY = event.offsetY;
      
      // begins new line
      ctx.beginPath();
      
      drawing = true;
  };
  this.canvas.onmousemove = function(event){
      if(drawing){
          // get current mouse position
          var currentX = event.offsetX;
          var currentY = event.offsetY;
          
          draw(lastX, lastY, currentX, currentY);
          
          // set current coordinates to last one
          lastX = currentX;
          lastY = currentY;
      }
  };
  this.canvas.onmouseup = function(event){
    // stop drawing
    drawing = false;
  };
  function getTouchPos(e) {
    if (!e) { e = event };
    if(e.touches) {
      if(e.touches.length == 1) { //ony handle one-touch
        var touch = e.touches[0];
        touchX = touch.clientX;
        touchY = touch.clientY;

      }
    }
  }
  function start (event) {
    // begins new line
    ctx.beginPath();
      
    drawing = true;
    event.preventDefault();
  }
  this.canvas.ontouchstart = function (event) {
    start(event);
  }
  this.canvas.ontouchmove = function (event) {
    start(event);
  }
  this.canvas.ontouchend = function(event) {
    drawing = false;
  }
  // canvas reset
  function reset(){
    this.canvas[0].width = this.canvas[0].width; 
  }
  
  function draw(lX, lY, cX, cY){
    // line from
    ctx.moveTo(lX,lY);
    // to
    ctx.lineTo(cX,cY);
    // color
    // draw it
    ctx.stroke();
  }

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
