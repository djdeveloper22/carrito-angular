import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { CarritoComponent } from './components/carrito/carrito.component';

import {HttpClientModule} from '@angular/common/http'
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { AlertService } from './service/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductComponent,
    CarritoComponent,
    CarouselComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
