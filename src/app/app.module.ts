import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';
import { RecommendModule } from './recommend';
import { MyModule } from './my/my.module';
import { ProductContainerComponent } from './product';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    RecommendModule,
    MyModule,
    ProductModule,
    CategoryModule,
    ChatModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }    ,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
