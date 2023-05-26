import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: Product[] = [];

  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.getDataProduct();
  }

  getDataProduct(): void{
    this.storeService.getAllProducts().subscribe(response =>{
      this.products = response;
      console.log(this.products);
    });
  }

}
