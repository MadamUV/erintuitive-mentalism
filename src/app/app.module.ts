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

import { ColorPickerModule } from 'ngx-color-picker';
import { FemaleSkirtsComponent } from './female-skirts/female-skirts.component';
import { FemaleSkirtsModule } from './female-skirts/female-skirts.module';

@NgModule({
  declarations: [
    AppComponent,
    BodiesComponent,
    MouthsComponent,
    HairsComponent,
    EyesComponent,
    MalePantsComponent,
    FemalePantsComponent,
    FemalePantsStickers1Component,
    FemalePantsStickers2Component,
    FemalePantsStickers3Component,
    FemalePantsStickers4Component,
    FemalePantsStickers5Component,
    
    FemaleSkirtsComponent
  ],
  imports: [
    BrowserModule,
    BodiesModule,
    MouthsModule,
    HairsModule,
    EyesModule,
    ColorPickerModule,
    MalePantsModule,
    FemalePantsModule,
    FemalePantsStickers1Module,
    FemalePantsStickers2Module,
    FemalePantsStickers3Module,
    FemalePantsStickers4Module,
    FemalePantsStickers5Module,

    FemaleSkirtsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
