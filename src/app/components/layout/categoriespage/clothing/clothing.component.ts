import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  clothing:product[];

  constructor(public itemservice: ItemService) { }

  ngOnInit(): void {

    this.clothing = this.itemservice.clothing;
  }

  toDetail(parameter:any, categorieName:string){
    var a = this.clothing[parameter].id;
    return this.itemservice.getToDetail(a, categorieName);
  }

}
