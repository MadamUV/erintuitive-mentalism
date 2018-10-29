import { Component, OnInit, OnDestroy, Input } from '@angular/core';
//import { LocalStorageService } from 'ngx-localstorage';
import { ChatService } from '../chat-service';

@Component ({
    selector: 'world',
    templateUrl: './world.html',
    styleUrls: ['../app.component.css', './world.scss'],
    providers: [ChatService]
})
export class WorldComponent {
    constructor(private chatService : ChatService){};
    messages = [];
    message;
    connection;
    onKeyUp(event) {
        if (event.key === "Enter") {
            this.sendMessage();
        }
    }
    //clicking n will also sendMessage()
    sendMessage() {
        this.chatService.sendMessage(this.message);
        this.txtMessage = '';
        this.message = [];
        var chatWindow = document.getElementById("messages");
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    name : string = document.getElementById("myName").innerHTML;
	//set user id
	password : string;
    d : Date = new Date();
    userId : string = this.d.toString();
    players = [this.userId];
    txtMessage : string = document.getElementById("m").innerHTML;    
	myName : string = document.getElementById("myName").innerHTML;
	myAvatar : string = document.getElementById("relativeContainerContainer").innerHTML;
    isDrawing : boolean = false;
    afkId : string;
    loggedOut = false;
    
    canvas = <any>document.getElementById("canvas");
    dataURL : string;
    afkCount : 0;

    submitDrawing(dataUrl) {
		if(this.dataURL != null && this.dataURL != undefined){
			document.getElementById("myDrawing").style.visibility = 'visible';
            this.message = ["msg", this.txtMessage, this.name, this.userId, this.myAvatar, true];
            this.sendMessage();
		}
		else {
			document.getElementById("myDrawing").style.visibility = 'hidden';
		}
    }
    ngOnInit() {
        setInterval(function(){
            this.message = ["afk", this.userId, this.name, this.afkCount];
        }, 1000);  
        if (this.password == "173281"){   
            this.userId = this.password;
        } else {
            var userId = this.d.getTime();
        }        
        this.afkId = userId + "_afk";
        this.myAvatar = '<div class="' + this.userId + " " + this.name + '">' + this.myAvatar + "<br><div class=" + this.afkId + "</div></div>";
        if (document.getElementById("canvas") != undefined && document.getElementById("canvas") != null ){
            this.dataURL = this.canvas.toDataURL();
        }
        else {
            this.dataURL = '';
        }
        this.connection = this.chatService.getMessages().subscribe(message => {
            this.messages.push(message);
            let afkDiv = document.getElementsByClassName(this.afkId)[0];
            if(message[0] == "msg") {
                afkDiv.innerHTML = "";
                let counter = 0;
                //     ["msg", this.txtMessage, this.name, this.userId, this.myAvatar, true];
                    // ["afk", this.userId, this.name, this.afkCount]
                //}
                if(name == "Erintuitive" && this.userId == "173281"){
                    if(this.txtMessage.indexOf("/remove ") == 0){
                        var nameValue = this.txtMessage.substr(8);
                        for (let player of this.players){
                            //name
                            if(message[2] == nameValue){
                                //its to remove player, but for convenience's sake we'll give them an afk status
                                this.message = ["afk", message[3], nameValue, 1501];
                                this.sendMessage();
                            }
                        }
                    }
                    else {
                        if(this.userId == message[3]){

                            var totalMessage = '<div class="flex-container"><div>' + message[4] + '</div><div>' + message[1] + '</div></div>';
                            document.getElementById("messages").innerHTML += totalMessage;
                        }
                        else {
                            var totalMessage = '<div class="flex-container"><div>' + message[1] + '</div><div class="flex-container-backwards">' + message[4] + '</div></div>';
                        }
                    }
                    
                }
                else {
                    if(userId == message[3]){
                        if (message[5] == true){
                            var totalMessage = '<div class="flex-container"><div><div><font color="green"><a href="' + message[1] + '"></font>' + message[2] + '</a></div><div class="flex-container-backwards">' + message[4] + '</div></div>';
                        }
                        else {
                            var totalMessage = '<div class="flex-container"><div>' + this.myAvatar + '</div><div><div><font color="green">' + this.txtMessage + '</font></div></div>';
                        }
                        document.getElementById("messages").innerHTML += totalMessage;
                    }
                    else {
                        if(message[5] == true){
                            var totalMessage = name + " has sent Erintuitive a drawing to interpret!";
                        }
                        else {
                            var totalMessage = '<div class="flex-container"><div><font color="green"><a href="' + message[1] + '">' + message[2] + '</a></font></div><div class="flex-container-backwards">' + message[4] + '</div></div>';
                        }
                    }
                }
            }
            else if (message[0] == "afk") {
                let afkPerson = document.getElementsByClassName(message[1])[0];
                let countPerson = false;
                if(this.name == message[2]) this.afkCount++;
                for(let i=0; i<this.players.length; i++) {
                    if(message[1] == this.players[i]){
                        countPerson = true;
                        if(message[3] > 1500){
                            this.players.splice(i, 1);
                            this.loggedOut = true;
                        }
                        else if(message[3] < 1500 && message[2] >= 500) { afkDiv.innerHTML = "(afk)"; }
                        else if (message[3] < 2) { afkDiv.innerHTML = ""; }
                    }
                }
                if (countPerson == false) this.players.push(message[1]);
            }
        });
        this.submitDrawing(this.dataURL);    
        document.getElementById("drawing").style.display = "none";
        if(this.loggedOut == true) {
            alert('You may be timed out. Do you wish to stay?');
        }
    }
	submit() {
        this.message = ["msg", this.txtMessage, this.name, this.userId, this.myAvatar, this.isDrawing];
        this.sendMessage();
        this.message = '';
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