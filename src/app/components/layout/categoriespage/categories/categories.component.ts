import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { product } from 'src/app/model/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit{

  bikePage1:product[];
  bikePage2:product[];
  isMobile: boolean = false;

  @ViewChild('page1') page1:ElementRef;
  @ViewChild('page2') page2!: ElementRef;


  ChoosePage2(){ 
    this.page2.nativeElement.classList.add("active-card");
    this.page1.nativeElement.classList.remove("active-card");
  }

  ChoosePage1(){
    this.page1.nativeElement.classList.add("active-card");
    this.page2.nativeElement.classList.remove("active-card");
  }

  Adddata(){
    var a = "Ben gelen datayim";
    return this.itemservice.getDataFromCate(a);
  }

  ngOnInit(): void {
    this.bikePage1 = this.itemservice.bikePage1;
    this.bikePage2 = this.itemservice.bikePage2;
    // window.onresize = () => this.isMobile = window.innerWidth <= 376;
    // if(document.documentElement.clientWidth < 376){
    //   this.isMobile = true;
    // }
  }

  constructor(public itemservice: ItemService) { 
  }

  ngAfterViewInit(){
    
  }

  toDetail(parameter:any, categorieName:string){
    var a = this.itemservice.bikePage1[parameter].id;
    return this.itemservice.getToDetail(a, categorieName);
  }

}
