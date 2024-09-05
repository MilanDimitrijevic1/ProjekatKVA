import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Odeca } from '../../shared/models/Odeca';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(odeca:Odeca):void{
    let cartItem = this.cart.items.find(item => item.odeca.id === odeca.id);
    if(cartItem){
      this.changeQuantity(odeca.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(odeca));
  }

  removeFromCart(odecaId:number): void{
    this.cart.items = this.cart.items.filter(item => item.odeca.id != odecaId);
  }

  changeQuantity(odecaId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.odeca.id === odecaId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

}
