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
import { ExportFileService } from './service/exportFile.service';
import {} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ExportFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
