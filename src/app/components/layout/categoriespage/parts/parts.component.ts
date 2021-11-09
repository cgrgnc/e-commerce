import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  parts:product[];

  constructor(public itemservice: ItemService) { }

  ngOnInit(): void {
    
    this.parts = this.itemservice.parts;

  }

  toDetail(parameter:any, categorieName:string){
    var a = this.parts[parameter].id;
    return this.itemservice.getToDetail(a, categorieName);
  }

}
