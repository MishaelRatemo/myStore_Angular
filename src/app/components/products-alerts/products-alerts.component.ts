import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products';



@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {
 @Input()  product!: Product | undefined;
 @Output() notify =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
