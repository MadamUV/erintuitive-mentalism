import { Component, OnInit, OnDestroy, Input } from '@angular/core';
//import { LocalStorageService } from 'ngx-localstorage';
import { ChatService } from '../chat-service';
import { DrawingComponent } from '../drawing/drawing.component';
import { WorldModule } from './world.module';
import { getPreviousOrParentNode } from '../../../node_modules/@angular/core/src/render3/instructions';

@Component ({
    selector: 'world',
    templateUrl: './world.html',
    styleUrls: ['../app.component.css', './world.scss', '../drawing/drawing.css'],
    providers: [ChatService]
}) 
export class WorldComponent implements OnInit, OnDestroy {
    message  : string = '';
    messages = [];
    connection;
    name : string = document.getElementById("myName").innerHTML;
    txtMessage : string;
	password : string;
    date : Date = new Date();
    d = this.date.getTime();
    userId : string = this.d.toString();
    players = [this.userId];
	myAvatar : string = document.getElementById("relativeContainerContainer").innerHTML;
    isDrawing : boolean = false;
    afkId : string = this.userId + "_afk";
    loggedOut = false;
    afkDiv : Element;
    currentId = this.userId;
    currentAvatarSpeaker : string = '';
    afkCount = 0;
    canvasDrawing : string = ''; 
    firstName : string = '';
    
    canvas : HTMLCanvasElement;
    bestDataURL : string;
    erinBool : boolean = false;
    imgSetup : string = '';

    constructor(private chatService: ChatService) { }

    setPass() {
        if (this.password == "173281"){
            document.getElementById('pass').style.display = "none";
            this.userId = this.password;
        }
    }
    drawingSave() {
        this.bestDataURL = this.canvas.toDataURL("JPEG");
        console.log(typeof(this.bestDataURL));
        console.log(this.bestDataURL);
        //document.getElementsByClassName("afk")[0].classList.add(this.afkId);
        //this.afkDiv = document.getElementsByClassName(this.afkId)[0];
        //remember, the booleans and numbers will become strings
        let dataProcess = this.bestDataURL.replace(" ", "");
        this.imgSetup = '<img style="border-radius: 8px; -webkit-border-radius: 8px; -ms-border-radius: 8px; -o-border-radius: 8px; background-color: white;" src="' + dataProcess + '">';
        this.bestDataURL = this.imgSetup;
        this.message = "msg___" + this.bestDataURL + "___" + this.name + "___" + this.userId + "___" + this.myAvatar + "___true";
        this.sendMessage();
        document.getElementById("allDrawingStuff").style.display = "none";
    }
    //["msg", this.txtMessage, this.name, this.userId, this.myAvatar, this.isDrawing];
    initVariables () {
        //name already initialized
        //pass initialized if we call setpass before this function inside ngOniInit()
        this.setPass();
        if(this.txtMessage != ""){
            this.message = "msg___" + this.txtMessage + "___" + this.name + "___" + this.userId + "___" + this.myAvatar + "___false";
            //Send message
            this.sendMessage();
        }

    }

    sendMessage() {

        this.chatService.sendMessage(this.message);

    }
    onKeyUp(event) { 
        if (event.key === "Enter") {
            this.initVariables();
        }
    }
    checkMessage (message) {
        message = message["text"].toString();
        message = message.split("___");
        //get chat window
        var chatWindow = document.getElementById("messagesTable");
        ///////////////
        if(message[0] == "msg") {
            //this.afkDiv.innerHTML = "";
            this.afkCount = 0;
            //     ["msg", this.txtMessage, this.name, this.userId, this.myAvatar, true];
                // ["afk", this.userId, this.name, this.afkCount]
            //}
            var textMsg = '<div style="margin-right: 12%; border: 1px tan solid; background-color: white; border-radius: 8px; -webkit-border-radius: 8px; -ms-border-radius: 8px; -o-border-radius: 8px;"><font color="black">' + message[1]; + '</div>';
            var nameMsg = message[2];
            var idMsg = message[3];
            var avatarMsg = message[4];
            var boolMsg = message[5];
            if(avatarMsg == this.currentAvatarSpeaker){
                avatarMsg = '';
            }
            var totalMessage = '';
            //change this
            if(this.name == "Erintuitive" ){
                if(textMsg.indexOf("/remove ") == 0){
                var nameValue = this.txtMessage.substr(8);
                    for (let player of this.players){
                        //name
                        if(nameMsg == nameValue){
                            //its to remove player, but for convenience's sake we'll give them an afk status
                            this.message = "afk___" + idMsg + "___" + nameValue + "___6000";
                            this.sendMessage();
                        }
                    }
                }
                else {
                    if(this.userId == idMsg){
                        if (boolMsg == "true"){
                            totalMessage = '<div class="flex-container"><div>' + avatarMsg + '</div><div style="margin-left: 30%">' + this.imgSetup; + '</div></div>';
                        }
                        else {
                            totalMessage = '<br><div class="flex-container"><div>' + avatarMsg + nameMsg + '</div><div>' + textMsg + " : " +'</div></div>';
                        }
                    }
                    else {
                        this.erinBool = true;
                        totalMessage = '<div class="flex-container"><div class="flex-container-backwards">' + avatarMsg + nameMsg + '</div><div>' + textMsg + " : " +'</div></div>';
                    }
                }
                
            }
            else {
                textMsg = '<div style="margin-left: 40%; width: 50% align: left; word-wrap: normal;">' + textMsg + '</div>';
                if(this.userId == idMsg){
                    if (boolMsg == "true"){
                        totalMessage = '<div class="flex-container"><div>' + avatarMsg + '</div><div style="margin-left: 30%">' + this.imgSetup; + '</div></div>';
                    }
                    else {
                        totalMessage = '<div class="flex-container"><div>' + avatarMsg + '</div><div><div>' + textMsg + '</div></div>';
                    }
                }
                else {
                    if(boolMsg == "true"){
                        totalMessage = '<div>' + avatarMsg + name + 'I have sent Erintuitive a drawing to interpret!</div>';
                    }
                    else {
                        totalMessage = '<div class="flex-container"><span>' + avatarMsg +'</span><div class="flex-container-backwards">' + textMsg + '</div></div>';
                    }
                }
                if(chatWindow.innerHTML == ""){
                    totalMessage = '<br><br>' + totalMessage;
                }
            }
            if((this.currentAvatarSpeaker != this.myAvatar && this.firstName != '' && message[2] != this.firstName) || this.erinBool == true) {
                totalMessage = '<div style="margin-top: 10%;">' + totalMessage + '</div>';
            }
            if(this.userId == idMsg){
                totalMessage = '<div style="margin-left: -20%">' + totalMessage + '</div>';
            }
            chatWindow.innerHTML += '<tr><td>' + totalMessage + '</td></tr>';
            if(avatarMsg != '') this.currentAvatarSpeaker = avatarMsg;
        }
        else if (message[0] == "afk") {
            //let afkPerson = document.getElementsByClassName(textMsg)[0];
            var afkCount2 = idMsg.parseInt();
            let countPerson = false;
            if(this.name == nameMsg && this.userId == textMsg) this.afkCount++;
            for(let i=0; i<this.players.length; i++) {
                if(textMsg == this.players[i]){
                    countPerson = true;
                    if(afkCount2 > 1500){
                        this.players.splice(i, 1);
                        this.loggedOut = true;
                    }
                    //else if(afkCount2 < 1500 && nameMsg >= 500) { this.afkDiv.innerHTML = "(afk)"; }
                    //else if (afkCount2 < 2) { this.afkDiv.innerHTML = ""; }
                }
            }
            if (countPerson == false) this.players.push(textMsg);
        }

        //////////////
        if(this.afkCount == 5000){
            for(let i=0; i<this.players.length; i++) {
                if(textMsg == this.players[i]){

                }
            }
        }
        this.message = '';
        this.txtMessage = "";
        this.firstName = nameMsg;
        document.getElementById("messages").scrollTop = chatWindow.scrollHeight;
        if(this.firstName == '') document.body.scrollTop = document.body.scrollHeight;
    }
    ngOnInit() {
        document.getElementById("relativeContainerContainer").style.display = "none";
        this.setPass();
        setInterval(function(){
            this.afkCount += 1;
        }, 1000);

        if(this.name == "Erintuitive"){
            document.getElementById("canvas2").style.display = "none";
        }

        //here we return the socket
        this.connection = this.chatService.getMessages().subscribe(message => {
        this.messages.push(message);

        if(message != '') this.checkMessage(message);

        });

        //drawing stuff
        //code example from https://www.html5canvastutorials.com/labs/html5-canvas-paint-application/
    this.canvas = <HTMLCanvasElement> document.getElementById('canvas2'); //modified to cast
    this.bestDataURL = this.canvas.toDataURL();
    var ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');

    ctx.strokeStyle = "black";
      // variable that decides if something should be drawn on mousemove
    var drawing = false;
    
    // the last coordinates before the current move
    var lastX;
    var lastY;

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
    function loadCanvas(dataURL, canvas, context) {
        // load image from data url
        var imageObj = new Image();
        imageObj.onload = function() {
          context.drawImage(this, 0, 0);
        };

        imageObj.src = dataURL;
      }
    this.canvas.onmouseup = function(event){
      // stop drawing
      drawing = false;
    };
      
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

    if(this.message != ''){
        this.sendMessage();
        document.getElementById("canvas2").style.display = "none";
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
    ngOnDestroy() {

        this.connection.unsubscribe();

    }
}

/*export class StorageAccessComponent implements OnInit{
    constructor (public _storageService: LocalStorageService) {
    }

    ngOnInit(): void {
        this._storageService.asPromisable().set
    }
}*/