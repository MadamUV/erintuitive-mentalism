import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:9200';
  private socket;

    sendMessage(message) {

    this.socket.emit('add-message', message);

    console.log("MESSAGE SENT");

  }

 

  getMessages() {

    let observable = new Observable(observer => {

      this.socket = io(this.url);

      this.socket.on('message', (data) => {

        observer.next(data);

      });

      return () => {

        this.socket.disconnect();

      }

    })

    return observable;

  }

  constructor() { }
}
