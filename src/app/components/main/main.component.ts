import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category.interface';
import { Product } from 'src/app/interface/product.interface';
import { AlertService } from 'src/app/service/alert.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  offset =1;
  search = "";
  textoPrueba: string = "probando viejo";

  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.getDataProduct();
    this.getCategories();
  }

  getDataProduct(): void{
    this.storeService.getAllProducts().subscribe(response =>{
      this.products = response;
      console.log(this.products);
    });
  }

  async getCategories(){
    this.categories = await this.storeService.getCateogries();
  }

  async getMoreProduct(){
    this.offset += 20;
    const moreProduct = await this.storeService.getProductsPagination(this.offset,20);
    this.products = [...this.products, ...moreProduct];
  }

  async getProductsByTitle(){
    if(this.search.length > 3){
      this.products = await this.storeService.getProductByTitle(this.search);
    } else if(this.search == ""){
      this.getDataProduct();
    }
  }

}
