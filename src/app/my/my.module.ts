import { NgModule } from '@angular/core';

import { MyRoutingModule } from './My-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
