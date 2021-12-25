import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  items = ["Bikes", "Parts", "Accessories", "Clothing"];
  biketypes = ["Road Bike", "Mountain Bike", "City Bike"];

  mainImages:any =[];

  bikePage1: product[] = [];
  bikePage2: product[] = [];
  parts: product[] =[];
  accessories: product[] =[];
  clothing: product[] =[];
  homeProducts: product[] =[];
  getData:any;

  

  constructor(public afs: AngularFirestore, private http: HttpClient) {


    this.afs.collection('bicycles').valueChanges().subscribe( (data:any) =>{
      var a = data.slice(0,20);
      a.map((e:any)=>{
        this.bikePage1.push(e);
      })
      this.homeProducts[0] = this.bikePage1[2];
    })

    this.afs.collection('bicycles').valueChanges().subscribe( (data:any) =>{
      var a = data.slice(21,41);
      a.map((e:any)=>{
        this.bikePage2.push(e);
      })
      
    })

    this.afs.collection('parts').valueChanges().subscribe( (data:any) =>{
      var a = data.slice(0,20);
      a.map((e:any)=>{
        this.parts.push(e);
      })
      this.homeProducts[1] = this.parts[2];
    })

    

    this.afs.collection('clothing').valueChanges().subscribe( (data:any) =>{
      var a = data.slice(0,20);
      a.map((e:any)=>{
        this.clothing.push(e);
      })
      this.homeProducts[3] = this.clothing[1];
    })

    

    this.afs.collection('accessories').valueChanges().subscribe( (data:any) =>{
      var a = data.slice(0,20);
      a.map((e:any)=>{
        this.accessories.push(e);
      })
      this.homeProducts[2] = this.accessories[1];
    })

    

    this.afs.collection('mainimages').valueChanges().subscribe( (data:any) =>{
      data.map((e:any)=>{
        this.mainImages.push(e);
      })
      
    })



   }

  getDataFromCate(parameter:any){
    this.getData = parameter;
    
  }

  toDetailData:any;
  toCategorieName:string;

  getToDetail(parameter:any, categorieName:string){
    this.toDetailData = parameter;
    this.toCategorieName = categorieName;
    
  }

}