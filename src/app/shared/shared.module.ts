import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent, ImageSliderComponent, SrollableTabComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';



@NgModule({
  declarations: [
    SrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    SrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }