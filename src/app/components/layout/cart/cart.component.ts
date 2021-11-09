import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isAuthenticated:boolean;

  constructor(public cart: Cart, private authService: AuthService) { 
    
  }


  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if(!user){
        this.isAuthenticated = false;
      }
      if(user){
        this.isAuthenticated = true;
      }
    })
  }

  removeItem(id:string){
    return this.cart.removeItem(id);
  }

  updateQuantity(form: NgForm, product:any){
    if(form.invalid){
      return;
    }
    const quantity = form.value.number;
    return this.cart.updateQuantity(product, quantity);
  }

}
