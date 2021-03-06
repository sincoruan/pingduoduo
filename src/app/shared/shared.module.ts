import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountDownComponent, FooterComponent, HorizontalGridComponent, ImageSliderComponent, ProductCardComponent, ProductTileComponent, SrollableTabComponent, VerticalGridComponent } from './components';
import { AvatarDirective, GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective } from './directives';
import { AgoPipe } from './pipes';



@NgModule({
  declarations: [
    SrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    CountDownComponent,
    AgoPipe,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent
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
    TagDirective,
    AvatarDirective,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent
  ]
})
export class SharedModule { }
