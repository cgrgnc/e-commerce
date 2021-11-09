import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'e-commerce';
  test:any = [];

  // categories: Array<any>;

  constructor(private authService: AuthService, private databaseService: DatabaseService){
    // this.categories = [
    //   "Categories", "Cases", "Video", "Accessories", "Sport Optics", "Lifestyle"
    // ]
  }

  ngOnInit(){
    this.authService.autoLogin();
    // this.databaseService.postData();

  }
}
