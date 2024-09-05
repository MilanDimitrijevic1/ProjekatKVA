import { Odeca } from "./Odeca";

export class CartItem{
    constructor(odeca:Odeca){
        this.odeca = odeca;
       // this.price;
    }

    odeca:Odeca;
    quantity:number = 1;

    get price():number{
        return this.odeca.price * this.quantity;
    }

}