import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category } from '../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  URL: string = 'https://api.escuelajs.co/api/v1/';
  private listProduct: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.cart.asObservable();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    const response = this.http.get<Product[]>(`${this.URL}products`)

    return response;
  }

  public async getProductsPagination(index: number, limit: number): Promise<Product[]> {
    return await this.http.get<any>(`${this.URL}products?offset=${index}&limit=${limit}`).toPromise();
  }

  public async getCateogries(): Promise<Category[]> {
    return await this.http.get<any>(`${this.URL}categories`).toPromise();
  }

  public async getProductByTitle(title: string): Promise<Product[]> {
    return await this.http.get<any>(`${this.URL}products/?title=${title}`).toPromise();
  }

  insertProduct(product: Product): void {
    if (this.listProduct.length === 0) {
      product.cantidad = 1;
      this.listProduct.push(product);
      this.cart.next(this.listProduct);
    } else {
      const productMod = this.listProduct.find((element) => {
        return element.id === product.id
      })
      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.cart.next(this.listProduct);
      } else {
        product.cantidad = 1;
        this.listProduct.push(product);
        this.cart.next(this.listProduct);
      }
    }
  }

  deleteProducto(id: number): void{
    this.listProduct = this.listProduct.filter((product)=>{
      return product.id !== id;
    })
    this.cart.next(this.listProduct);
  }

  findProductById(id: number) {
    return this.listProduct.find((element) => {
      return element.id === id
    })
  }

  totalCart() {
    const total = this.listProduct.reduce(function (acc, product) { return acc + (product.cantidad * product.price); }, 0)
    return total
  }

}

