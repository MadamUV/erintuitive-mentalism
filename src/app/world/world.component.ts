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
    connection;
    name : string = document.getElementById("myName").innerHTML;
    txtMessage : string;
	password : string;
    d : Date = new Date();
    userId : string = this.d.toString();
    players = [this.userId];
	myAvatar : string = document.getElementById("relativeContainerContainer").innerHTML;
    isDrawing : boolean = false;
    afkId : string;
    loggedOut = false;
    afkDiv = document.getElementsByClassName(this.afkId)[0];
    
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
        if(document.getElementById("canvas").style.display == "block"){
            //remember, the booleans and numbers will become strings
            this.message = "msg___" + this.dataURL + "___" + this.name + "___" + this.userId + "___" + this.myAvatar + "___true___false";
            this.sendMessage();
            this.canvas.style.display = "none";
        }
        if(this.txtMessage != ""){
            this.message = "msg___" + this.txtMessage + "___" + this.name + "___" + this.userId + "___" + this.myAvatar + "___false___false";
            //Send message
            this.sendMessage();
            this.txtMessage = "";
        }
    }

    sendMessage() {

        this.chatService.sendMessage(this.message);
        this.message = '';

    }

    checkMessage (message) {
        message = message.split("___");
        if(message[0] == "msg"){
            this.afkCount = 0;
        }
        if(this.afkCount == 5000){
            for(let i=0; i<this.players.length; i++) {
                if(message[1] == this.players[i]){

                }
            }
        }
    }

    ngOnInit() {

        this.setPass();
        setInterval(function(){
            this.afkCount += 1;
        }, 1000);

        //here we return the socket
        this.connection = this.chatService.getMessages().subscribe(message => {
        document.getElementById("messages").innerHTML += message;
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