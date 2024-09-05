import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cart!:Cart;

  constructor(private cartService: CartService) { 
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeCartItem(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.odeca.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.odeca.id, quantity);
    this.setCart();
  }

  ngOnInit(): void {
    
  }

}
