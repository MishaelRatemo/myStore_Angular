import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/products';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: Product | undefined;

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert(`Your  product has been added to the cart`)
  }


  constructor( private route: ActivatedRoute,
               private cartService: CartService
    )
               
   { }

  ngOnInit(): void {
    //get the prod Id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

  }

}
