import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountDownComponent, FooterComponent, HorizontalGridComponent, ImageSliderComponent, SrollableTabComponent, VerticalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';



@NgModule({
  declarations: [
    SrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    AgoPipe,
    FooterComponent,
    VerticalGridComponent
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
    GridItemTitleDirective,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent
  ]
})
export class SharedModule { }
