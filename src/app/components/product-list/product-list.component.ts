import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products =products;
  myIGM: string = 'assets/img/phones.jpeg'

  share(){
    window.alert('The product has been shared!! Thank you')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
