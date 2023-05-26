import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() products: any;
  product: Product[] = [];
  @Input() images: string[] = [];
  @Input() price: number = 0;
  @Input() title: string = "";
  notification: boolean = false;

  constructor(
    private storeService: StoreService
  )
  { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.storeService.getAllProducts().subscribe(response =>{
      return this.product = response;
    })
  }

  saveProduct(product: Product): void{
    this.storeService.insertProduct(product);
    this.showAlert();
  }

  showAlert(): void {
    this.notification = true;
    setTimeout(() => {
      this.notification = false;
    }, 3000);
  }
}
