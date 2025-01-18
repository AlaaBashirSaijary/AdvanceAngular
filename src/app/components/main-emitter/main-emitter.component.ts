import { Component } from '@angular/core';

@Component({
  selector: 'app-main-emitter',
  templateUrl: './main-emitter.component.html',
  styleUrl: './main-emitter.component.css'
})
export class MainEmitterComponent {
  products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 }
  ];

  cart: { name: string; price: number }[] = [];

  handleProductAdded(product: { name: string; price: number }) {
    this.cart.push(product);
    console.log('Product added to cart:', product);
  }
}
