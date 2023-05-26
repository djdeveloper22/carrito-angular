import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';
import { ExportFileService } from 'src/app/service/exportFile.service';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  myCart$ = this.storeService.myCart$;

  constructor(private storeService: StoreService, private fileName: ExportFileService) { }

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

  exportFileExcel(): void{
    this.fileName.saveAsExcel(this.myCart$, 'my_export');
  }

  totalCart() {
    const result = this.storeService.totalCart();
    return result;
  }

}
