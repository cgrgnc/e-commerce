import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit, AfterViewInit{

  @ViewChild('el') map!: ElementRef;
  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('carousel_nav') nav!: ElementRef;


  mainImages:any;
  

  next(){
    var a = this.map.nativeElement;
    var current = a.querySelectorAll(".current_slide")[0];
    var nextImage = current.nextElementSibling;
    if (nextImage === null){
      null;
    }else{
      var amountToMove = nextImage.style.left;
      a.style.transform = 'translateX(-' + amountToMove + ')';
      current.classList.remove("current_slide");
      nextImage.classList.add("current_slide");
      var nav = this.nav.nativeElement;
      var current_nav = nav.querySelectorAll(".current")[0];
      var next_nav = current_nav.nextElementSibling;
      current_nav.classList.remove("current");
      next_nav.classList.add("current");
    }
  }

  previous(){
    var a = this.map.nativeElement;
    var current = a.querySelectorAll(".current_slide")[0];
    var nextImage = current.previousElementSibling;
    if (nextImage === null){
      null;
    }else{
      var amountToMove = nextImage.style.left;
      a.style.transform = 'translateX(' + amountToMove + ')';
      current.classList.remove("current_slide");
      nextImage.classList.add("current_slide");
      var nav = this.nav.nativeElement;
      var current_nav = nav.querySelectorAll(".current")[0];
      var next_nav = current_nav.previousElementSibling;
      current_nav.classList.remove("current");
      next_nav.classList.add("current");
    }
  }




  constructor(private itemService: ItemService) { 
  }

  ngOnInit(): void {
    this.mainImages = this.itemService.mainImages;
  }
  


  ngAfterViewInit(){
    var b  = this.first.nativeElement;
    var width = b.getBoundingClientRect().width;
    var a = this.map.nativeElement;
    var slides: any = Array.from(a.children)
    slides.forEach((slide:any, index:number)=>{
      slide.style.left = width * index + 'px';
    })
    

  }
  

  
  
}




