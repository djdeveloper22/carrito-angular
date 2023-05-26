import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  myCart$ = this.storeService.myCart$;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {

  }

  totalProductos(precio: number, unidad: number): number{
    return precio * unidad;
  }

  deleteProducts(id: number): void{
    this.storeService.deleteProducto(id);
  }

  updateUnits(operation: string, id: number):void {
    const product = this.storeService.findProductById(id)
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'add') {
        product.cantidad = product.cantidad + 1;

      }
      if (product.cantidad === 0) {
        this.deleteProducts(id)
      }
    }
  }

  totalCart() {
    const result = this.storeService.totalCart();
    return result;
  }

}
