import { Injectable } from "@angular/core";
import { product } from "./product";

@Injectable()
export class Cart{
    public items: CartItem[] = [];
    public cartCount: number = 0;
    public total: number = 0

    addToCart(parameter:product, quantity: number = 1){
        let item = this.items.find(i => i.product.id == parameter.id);
        if (item != undefined){
            item.quantity += quantity;
        }else{
            this.items.push(new CartItem(parameter, quantity))
        }
     this.calculate();
    }

    calculate(){
        this.cartCount=0;
        this.total=0;
        this.items.forEach(data =>{
            this.cartCount += data.quantity;
            this.total += (data.quantity*data.product.price);
        })
        localStorage.setItem('items', JSON.stringify(this.items));
        localStorage.setItem('total', JSON.stringify(this.total));
        localStorage.setItem('cartCount', JSON.stringify(this.cartCount));
    }

    autoGetLocalStorage(){
        const items = JSON.parse(localStorage.getItem('items'));
        if(items){
            this.items = items;
            this.total = JSON.parse(localStorage.getItem('total'));
            this.cartCount = JSON.parse(localStorage.getItem('cartCount'));
        }
    }

    removeItem(id: string){
        let index = this.items.findIndex(i => i.product.id == id);
        this.items.splice(index,1);
        this.calculate();
    }
    updateQuantity(parameter:any, quantity:number){
        let item = this.items.find(i => i.product.id == parameter.id);
        if(item != undefined){
            item.quantity = quantity;
        }
        this.calculate();
    }
}

export class CartItem{
    constructor(public product: product, public quantity: number){}
}