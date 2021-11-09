import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/model';
import { product } from 'src/app/model/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private itemService: ItemService, private cart: Cart) { }

  selectedId: any;
  data:product;
  

  ngOnInit(): void {
    this.selectedId = this.itemService.toDetailData;
    if(this.itemService.toCategorieName == "bikePage1"){
      var a:number = this.itemService.bikePage1.findIndex((item:any) => item.id === this.selectedId);
      this.data = this.itemService.bikePage1[a];
      
    }
    if(this.itemService.toCategorieName == "parts"){
      var a:number = this.itemService.parts.findIndex((item:any) => item.id === this.selectedId);
      this.data = this.itemService.parts[a];
      
    }
    if(this.itemService.toCategorieName == "accessories"){
      var a:number = this.itemService.accessories.findIndex((item:any) => item.id === this.selectedId);
      this.data = this.itemService.accessories[a];
      
    }
    if(this.itemService.toCategorieName == "clothing"){
      var a:number = this.itemService.clothing.findIndex((item:any) => item.id === this.selectedId);
      this.data = this.itemService.clothing[a];
      
    }

  }

  addToCart(parameter:product){
    return this.cart.addToCart(parameter);
  }

}
