import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodiesComponent } from './bodies/bodies.component';
import { HairsComponent } from './hairs/hairs.component';
import { BodiesModule } from './bodies/bodies.module';
import { HairsModule } from './hairs/hairs.module';

@NgModule({
  declarations: [
    AppComponent,
    BodiesComponent,
    HairsComponent
  ],
  imports: [
    BrowserModule,
    BodiesModule,
    HairsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
