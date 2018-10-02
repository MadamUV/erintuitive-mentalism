import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodiesComponent } from './bodies/bodies.component';
import { HairsComponent } from './hairs/hairs.component';
import { BodiesModule } from './bodies/bodies.module';
import { HairsModule } from './hairs/hairs.module';
import { MouthsModule } from './mouths/mouths.module';
import { MouthsComponent } from './mouths/mouths.component';

import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    BodiesComponent,
    MouthsComponent,
    HairsComponent
  ],
  imports: [
    BrowserModule,
    BodiesModule,
    MouthsModule,
    HairsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
