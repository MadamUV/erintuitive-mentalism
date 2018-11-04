import { Component, OnInit, OnDestroy, Input } from '@angular/core';
//import { LocalStorageService } from 'ngx-localstorage';
import { ChatService } from '../chat-service';

@Component ({
    selector: 'world',
    templateUrl: './world.html',
    styleUrls: ['../app.component.css', './world.scss'],
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
	myAvatar : string = document.getElementById("relativeContainerContainer").innerHTML + this.name + ": ";
    isDrawing : boolean = false;
    afkId : string = this.userId + "_afk";
    loggedOut = false;
    afkDiv : Element;
    
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    dataURL = this.canvas.toDataURL();
    afkCount = 0;

    constructor(private chatService: ChatService) { }

    setPass() {
        if (this.password == "173281"){
            document.getElementById('pass').style.display = "none";
            this.userId = this.password;
        }
    }

    //["msg", this.txtMessage, this.name, this.userId, this.myAvatar, this.isDrawing];
    initVariables () {
        //name already initialized
        //pass initialized if we call setpass before this function inside ngOniInit()
        this.setPass();
        //document.getElementsByClassName("afk")[0].classList.add(this.afkId);
        //this.afkDiv = document.getElementsByClassName(this.afkId)[0];
        if(this.canvas.style.display == "block"){
            //remember, the booleans and numbers will become strings
            this.message = "msg___" + this.dataURL + "___" + this.name + "___" + this.userId + "___" + this.myAvatar + "___true";
            this.sendMessage();
            this.canvas.style.display = "none";
        }
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
        console.log("this is" + message[1]);
        //get chat window
        var chatWindow = document.getElementById("messages");
        ///////////////
        if(message[0] == "msg") {
            //this.afkDiv.innerHTML = "";
            this.afkCount = 0;
            //     ["msg", this.txtMessage, this.name, this.userId, this.myAvatar, true];
                // ["afk", this.userId, this.name, this.afkCount]
            //}
            if(this.name == "Erintuitive" /* && this.userId == "173281" */){
                if(this.txtMessage.indexOf("/remove ") == 0){
                    var nameValue = this.txtMessage.substr(8);
                    for (let player of this.players){
                        //name
                        if(message[2] == nameValue){
                            //its to remove player, but for convenience's sake we'll give them an afk status
                            this.message = "afk___" + message[3] + "___" + nameValue + "___" + this.afkCount;
                            this.sendMessage();
                        }
                    }
                }
                else {
                    if(this.userId == message[3]){

                        var totalMessage = '<br><div class="flex-container"><div>' + message[4] + message[2] + '</div><div>' + message[1] + '</div></div>';
                        document.getElementById("messages").innerHTML += totalMessage;
                    }
                    else {
                        var totalMessage = '<div class="flex-container margin-it"><div>' + message[1] + '</div><div class="flex-container-backwards">' + message[4] + message[2] + '</div></div>';
                    }
                }
                
            }
            else {
                if(this.userId == message[3]){
                    if (message[5] == "true"){
                        var totalMessage = '<div class="flex-container"><div><div><font color="green"><a href="' + message[1] + '"></font>' + message[2] + '</a></div><div class="flex-container-backwards">' + message[4] + '</div></div>';
                    }
                    else {
                        var totalMessage = '<div class="flex-container"><div>' + this.myAvatar + '</div><div><div><font color="green">' + this.txtMessage + '</font></div></div>';
                    }
                }
                else {
                    if(message[5] == "true"){
                        var totalMessage = '<div class="margin-it">' + name + ' has sent Erintuitive a drawing to interpret!<br><div class="flex-container"><div><font color="green"><a href="' + message[1] + message[2] + '">' + message[2] + '</a></font></div><div class="flex-container-backwards">' + message[4] + '</div></div></div>';
                    }
                    else {
                        var totalMessage = '<div class="flex-container margin-it"><div>' + message[1] + '</div><div class="flex-container-backwards">' + message[4] + '</div></div>';
                    }
                }
                if(chatWindow.innerHTML == ""){
                    totalMessage = '<br><br><br><br><br><br><br><br>' + totalMessage;
                }
                chatWindow.innerHTML += totalMessage;
            }
        }
        else if (message[0] == "afk") {
            //let afkPerson = document.getElementsByClassName(message[1])[0];
            var afkCount2 = message[3].parseInt();
            let countPerson = false;
            if(this.name == message[2] && this.userId == message[1]) this.afkCount++;
            for(let i=0; i<this.players.length; i++) {
                if(message[1] == this.players[i]){
                    countPerson = true;
                    if(afkCount2 > 1500){
                        this.players.splice(i, 1);
                        this.loggedOut = true;
                    }
                    //else if(afkCount2 < 1500 && message[2] >= 500) { this.afkDiv.innerHTML = "(afk)"; }
                    //else if (afkCount2 < 2) { this.afkDiv.innerHTML = ""; }
                }
            }
            if (countPerson == false) this.players.push(message[1]);
        }

        //////////////
        if(this.afkCount == 5000){
            for(let i=0; i<this.players.length; i++) {
                if(message[1] == this.players[i]){

                }
            }
        }
        this.message = '';
        this.txtMessage = "";
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    ngOnInit() {

        this.setPass();
        setInterval(function(){
            this.afkCount += 1;
        }, 1000);

        //here we return the socket
        this.connection = this.chatService.getMessages().subscribe(message => {
        this.messages.push(message);
        console.log(this.messages);

        if(message != '') this.checkMessage(message);

        })

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