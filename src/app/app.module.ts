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

import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    BodiesComponent,
    MouthsComponent,
    HairsComponent,
    EyesComponent,
    MalePantsComponent,
    FemalePantsComponent
  ],
  imports: [
    BrowserModule,
    BodiesModule,
    MouthsModule,
    HairsModule,
    EyesModule,
    ColorPickerModule,
    MalePantsModule,
    FemalePantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
