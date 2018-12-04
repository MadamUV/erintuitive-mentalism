import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodiesComponent } from './bodies/bodies.component';
import { HairsComponent } from './hairs/hairs.component';
import { BodiesModule } from './bodies/bodies.module';
import { HairsModule } from './hairs/hairs.module';
import { MouthsModule } from './mouths/mouths.module';
import { MouthsComponent } from './mouths/mouths.component';
import { EyesComponent } from './eyes/eyes.component';
import { EyesModule } from './eyes/eyes.module';
import { MalePantsComponent } from './male-pants/male-pants.component';
import { MalePantsModule } from './male-pants/male-pants.module';

import { MalePantsStickers1Component } from './male-pants/male-pants-stickers1/male-pants-stickers1.component';
import { MalePantsStickers1Module } from './male-pants/male-pants-stickers1/male-pants-stickers1.module';
import { MalePantsStickers2Component } from './male-pants/male-pants-stickers2/male-pants-stickers2.component';
import { MalePantsStickers2Module } from './male-pants/male-pants-stickers2/male-pants-stickers2.module';

import { MaleSkirtsComponent } from './male-skirts/male-skirts.component';
import { MaleSkirtsModule } from './male-skirts/male-skirts.module';
import { MaleSkirtsStickers1Component } from './male-skirts/male-skirts-stickers1/male-skirts-stickers1.component';
import { MaleSkirtsStickers1Module } from './male-skirts/male-skirts-stickers1/male-skirts-stickers1.module';

import { FemalePantsComponent } from './female-pants/female-pants.component';
import { FemalePantsModule } from './female-pants/female-pants.module';
import { FemalePantsStickers1Component } from './female-pants/female-pants-stickers1/female-pants-stickers1.component';
import { FemalePantsStickers1Module } from './female-pants/female-pants-stickers1/female-pants-stickers1.module';
import { FemalePantsStickers2Component } from './female-pants/female-pants-stickers2/female-pants-stickers2.component';
import { FemalePantsStickers2Module } from './female-pants/female-pants-stickers2/female-pants-stickers2.module';
import { FemalePantsStickers3Component } from './female-pants/female-pants-stickers3/female-pants-stickers3.component';
import { FemalePantsStickers3Module } from './female-pants/female-pants-stickers3/female-pants-stickers3.module';
import { FemalePantsStickers4Component } from './female-pants/female-pants-stickers4/female-pants-stickers4.component';
import { FemalePantsStickers4Module } from './female-pants/female-pants-stickers4/female-pants-stickers4.module';
import { FemalePantsStickers5Component } from './female-pants/female-pants-stickers5/female-pants-stickers5.component';
import { FemalePantsStickers5Module } from './female-pants/female-pants-stickers5/female-pants-stickers5.module';

import { FemaleTopsComponent } from './female-tops/female-tops.component';
import { FemaleTopsModule } from './female-tops/female-tops.module';

import { ColorPickerModule } from 'ngx-color-picker';

import { FemaleSkirtsComponent } from './female-skirts/female-skirts.component';
import { FemaleSkirtsModule } from './female-skirts/female-skirts.module';
import { FemaleSkirtsStickers1Component } from './female-skirts/female-skirts-stickers1/female_skirts_sticker1.component';
import { FemaleSkirtsStickers1Module } from './female-skirts/female-skirts-stickers1/female-skirts-stickers1.module';
import { FemaleSkirtsStickers2Component } from './female-skirts/female-skirts-stickers2/female-skirts-stickers2.component';
import { FemaleSkirtsStickers2Module } from './female-skirts/female-skirts-stickers2/female-skirts-stickers2.module';
import { MaleTopsModule } from './male-tops/male-tops.module';
import { MaleTopsComponent } from './male-tops/male-tops.component';
import { FormsModule } from '@angular/forms';
import { WorldModule } from './world/world.module';
import { WorldComponent } from './world/world.component';
import { DrawingComponent } from './drawing/drawing.component';
import { DrawingModule } from './drawing/drawing.module';
import { DrawingNewComponent } from './drawing-new/drawing-new.component';
//import { Injectable } from '@angular/core';
//import { Socket } from 'ng6-socket-io';
//import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
//import { map } from 'rxjs/operators';

//const config : SocketIoConfig = { url: window.location.hostname };

@NgModule({
  declarations: [
    AppComponent,
    BodiesComponent,
    MouthsComponent,
    HairsComponent,
    EyesComponent,
    MalePantsComponent,
    MaleSkirtsComponent,
    MalePantsStickers1Component,
    MalePantsStickers2Component,

    MaleSkirtsStickers1Component,

    FemalePantsComponent,
    FemalePantsStickers1Component,
    FemalePantsStickers2Component,
    FemalePantsStickers3Component,
    FemalePantsStickers4Component,
    FemalePantsStickers5Component,
    
    FemaleSkirtsComponent,
    FemaleSkirtsStickers1Component,
    FemaleSkirtsStickers2Component,

    FemaleTopsComponent,
    MaleTopsComponent,

    WorldComponent,
    DrawingComponent,
    DrawingNewComponent

  ],
  imports: [
    BrowserModule,
    BodiesModule,
    MouthsModule,
    HairsModule,
    EyesModule,
    ColorPickerModule,
    MalePantsModule,
    MaleSkirtsModule,
    MalePantsStickers1Module,
    MalePantsStickers2Module,

    MalePantsStickers1Module,

    FemalePantsModule,
    FemalePantsStickers1Module,
    FemalePantsStickers2Module,
    FemalePantsStickers3Module,
    FemalePantsStickers4Module,
    FemalePantsStickers5Module,

    FemaleSkirtsModule,
    FemaleSkirtsStickers1Module,
    FemaleSkirtsStickers2Module,

    FemaleTopsModule,
    MaleTopsModule,

    FormsModule,

    //SocketIoModule.forRoot(config)
    WorldModule,
    DrawingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

/*@Injectable()
export class ChatService {
  constructor(private socket : Socket) {
    
  }
  msg : string;
  sendMessage(msg){
    this.socket.emit("message", msg);
  }
  getMessage(){
    return this.socket
      .fromEvent("message")
      .pipe(map(data => this.msg ));
  }
}*/