import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category } from '../interface/category.interface';

@Injectable()
export class AlertService {

  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();

  constructor() { }

  showMessageAlert(): void{
    let msg = "por favor muestra el mensaje"
    this.alertSource.next(msg)
  }
}

