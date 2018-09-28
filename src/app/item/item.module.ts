import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodiesModule } from '../bodies/bodies.module'
import { HairsModule } from '../hairs/hairs.module';

import { BodiesComponent } from '../bodies/bodies.component'
import { HairsComponent } from '../hairs/hairs.component';

@NgModule({
  imports: [
    CommonModule,
    HairsModule,
    BodiesModule
  ],
  declarations: [
    BodiesComponent,
    HairsComponent
  ]
})
export class ItemModule { 

}
