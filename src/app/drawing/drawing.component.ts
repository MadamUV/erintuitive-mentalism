import { Component } from '@angular/core';
import { ChatService } from '../chat-service';

@Component ({
    selector: 'drawing',
    templateUrl: './drawing.html',
    styleUrls: ['./drawing.css'],
    providers: [ChatService]
})

export class DrawingComponent {
  //init chatservice
  constructor(private chatService: ChatService) { }

  dataUrl;
  message : string = '';
  name : string;
  myAvatar : string = '';
  isDrawing : boolean = false;
  initVariables () {
    var canvas = <any>document.getElementById('canvas'); //modified to cast
    var dataURL = canvas.toDataURL();
    //document.getElementsByClassName("afk")[0].classList.add(this.afkId);
    //this.afkDiv = document.getElementsByClassName(this.afkId)[0];
    if(document.getElementById("canvas").style.display == "block" && dataURL != ''){
        //remember, the booleans and numbers will become strings
        if(document.getElementById("relativeContainerContainer").innerHTML != undefined && document.getElementById("relativeContainerContainer").innerHTML != null){
          this.myAvatar = document.getElementById("relativeContainerContainer").innerHTML;
        }
        if(document.getElementById("myName").innerHTML != null && document.getElementById("relativeContainerContainer").innerHTML != undefined && document.getElementById("relativeContainerContainer").innerHTML != undefined){
          this.name = document.getElementById("relativeContainerContainer").innerHTML;
        }
        this.message = "msg___" + dataURL + "___anyName___anyUser___" + this.myAvatar + "___true";
        this.sendMessage();
        document.getElementById("canvas").style.display = "none";
    }
  }
  sendMessage() {

      this.chatService.sendMessage(this.message);
      document.getElementById("relativeContainerContainer").style.display = "none";
  }
  ngOnInit() { 
    //code example from https://www.html5canvastutorials.com/labs/html5-canvas-paint-application/
    let canvas = <any>document.getElementById('canvas'); //modified to cast
    var ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

    ctx.strokeStyle = "black";
      // variable that decides if something should be drawn on mousemove
    var drawing = false;
    
    // the last coordinates before the current move
    var lastX;
    var lastY;

    canvas.onmousedown = function(event){
      
      lastX = event.offsetX;
      lastY = event.offsetY;
      
      // begins new line
      ctx.beginPath();
      
      drawing = true;
    };
    canvas.onmousemove = function(event){
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
    canvas.onmouseup = function(event){
      // stop drawing
      drawing = false;
      this.dataUrl = canvas.toDataURL();
    };
      
    // canvas reset
    function reset(){
      canvas[0].width = canvas[0].width; 
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
    document.getElementById("_dullGreen").onfocus = function () {
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