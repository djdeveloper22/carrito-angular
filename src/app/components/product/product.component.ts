import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.storeService.getAllProducts().subscribe(response =>{
      return this.products = response;
    })
  }

  saveProduct(product: Product): void{
    return this.storeService.insertProduct(product);
  }

}
