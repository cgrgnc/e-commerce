import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Form, NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/model';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('saveAdress') saveAdress! : ElementRef; 
  
  

  constructor(private afs: AngularFirestore, private cart: Cart) { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(script);
    }
  }

  onSubmit(form: NgForm){
    const save = this.saveAdress.nativeElement;
    const user = JSON.parse(localStorage.getItem("user"));

    if(save.checked){
      
      const AdressInformations = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        adress: form.value.street,
        zusatzAdress: form.value.additionalAdress,
        postalCode: form.value.postalCode,
        city: form.value.city,
        country: form.value.country,
        phone: form.value.phone
      }

      this.afs.collection(user._token).add(AdressInformations);
    }

    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:
        'pk_test_51JmaTwIkQljihorcvcufd45zLOmjpJevAyuak9S7xpb3ryFnRx530IRSiIEbogleBQMIvjkf8ueT3UpLNjhdIC3h00Vm3NVp4B',

      locale: 'auto',
      token: function (stripeToken: any) {
        
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: user.email,
      description: +this.cart.cartCount+' Products Added',
      amount: this.cart.total * 100,
    });


  }

}
