import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories:product[];

  constructor(public itemservice: ItemService) { }

  ngOnInit(): void {
    this.accessories = this.itemservice.accessories;

  }

  toDetail(parameter:any, categorieName:string){
    var a = this.accessories[parameter].id;
    return this.itemservice.getToDetail(a, categorieName);
  }

}
