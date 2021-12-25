import { ChangeDetectionStrategy, Component, OnInit, OnChanges, ViewChild, ElementRef} from '@angular/core';
import { Cart } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';

// import { AppComponent } from '../../../../app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  @ViewChild('navm') navm:ElementRef;
  @ViewChild('body') body:ElementRef;
  @ViewChild('cartHTML') cartHTML:ElementRef;

  validCartCount: boolean = true;

  items: any;
  biketypes: any;
  constructor(public itemservice:ItemService, public cart: Cart, private authService: AuthService) {
    
   }

  isAuthenticated: boolean = true;

  ngOnInit(): void {
    // this.itemservice.getItems().subscribe(data => {
    //   this.items = data.map((e:any) => e.type)
    // })

    // this.itemservice.getBikeTypes().subscribe(data => {
    //   this.biketypes = data.map((e:any) => e.type)
    // })

    this.cart.autoGetLocalStorage();

    this.items = this.itemservice.items;
    this.biketypes = this.itemservice.biketypes; 
    this.authService.user.subscribe(user => {
      if(!user){
        this.isAuthenticated = false;
      }
      if(user){
        this.isAuthenticated = true;
      }
    })
    
  }

  ngOnChanges(){
    // if(this.cart.cartCount == 0){
    //   this.validCartCount = false;
    // }else{
    //   this.validCartCount = true;
    // }
  }

  logOut(){
    this.authService.logOut();
  }
  openNavm(){
    this.navm.nativeElement.classList.add("show");
    this.body.nativeElement.classList.add("show");
    this.cartHTML.nativeElement.classList.add("show");
  }
  onClose(){
    this.navm.nativeElement.classList.remove("show");
    this.body.nativeElement.classList.remove("show");
    this.cartHTML.nativeElement.classList.remove("show");
  }

  

  

}
