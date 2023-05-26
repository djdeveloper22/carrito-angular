import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  viewProductCart: boolean = false;
  myCart$ = this.storeService.myCart$;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {

  }

  toggleCart(): void {
    this.viewProductCart = !this.viewProductCart;
  }

}
