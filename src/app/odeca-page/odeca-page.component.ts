import { Component, OnInit } from '@angular/core';
import { Odeca } from '../shared/models/Odeca';
import { ActivatedRoute, Router } from '@angular/router';
import { OdecaService } from '../services/odeca/odeca.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-odeca-page',
  templateUrl: './odeca-page.component.html',
  styleUrl: './odeca-page.component.css'
})
export class OdecaPageComponent implements OnInit{

  odeca!: Odeca;

  constructor(private activatedRoute:ActivatedRoute, private odecaService: OdecaService, private cartService: CartService, private router: Router) { 
    activatedRoute.params.subscribe((params) =>{
      if(params['id'])
        this.odeca = odecaService.getOdecaById(params['id']);
    })
  }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.odeca);
    this.router.navigateByUrl('/cart-page');
  }

}
