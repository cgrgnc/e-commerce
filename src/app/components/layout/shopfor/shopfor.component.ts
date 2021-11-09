import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-shopfor',
  templateUrl: './shopfor.component.html',
  styleUrls: ['./shopfor.component.css']
})
export class ShopforComponent implements OnInit {

  homeProducts:any;
  bikePage1:any;
  parts:any;
  accessories:any;
  isMobile:boolean = false;
  

  routerpath = ["categories", "parts", "accessories", "clothing"];
  
  ngOnInit(): void {
    window.onresize = () => this.isMobile = window.innerWidth <= 360;
    if(document.documentElement.clientWidth < 360){
      this.isMobile = true;
    }

    
    
  }
  categories: any = [];

  constructor(private http: HttpClient, private itemService: ItemService) {
    this.homeProducts = this.itemService.homeProducts;

    this.categories = this.itemService.items;
    this.bikePage1 = this.itemService.bikePage1;
    this.parts = this.itemService.parts;
    this.accessories = this.itemService.accessories;

   }

   toDetail(parameter:number, categorieName:string){
     if(categorieName == "bikePage1"){
      var a = this.bikePage1[parameter].id;
      
      return this.itemService.getToDetail(a, categorieName);
     }
     if(categorieName == "parts"){
      var a = this.parts[parameter].id;
      
      return this.itemService.getToDetail(a, categorieName);
     }
     if(categorieName == "accessories"){
      var a = this.accessories[parameter].id;
      
      return this.itemService.getToDetail(a, categorieName);
     }
    
  }
   

}
