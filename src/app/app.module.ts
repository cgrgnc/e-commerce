import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/fixed-components/navbar/navbar.component';
import { SlideComponent } from './components/layout/slide/slide.component';
import { ShopforComponent } from './components/layout/shopfor/shopfor.component';
import { FooterComponent } from './components/layout/fixed-components/footer/footer.component';
import { LoginComponent } from './components/layout/login/login.component';
import { CreateaccountComponent } from './components/layout/createaccount/createaccount.component';
import { CartComponent } from './components/layout/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './components/layout/details/details.component';

import { LayoutComponent } from './components/layout/layout.component';

import { CategoriesComponent } from './components/layout/categoriespage/categories/categories.component';
import { HorizontallineComponent } from './components/common/horizontalline/horizontalline.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ItemService } from './services/item.service';
import { PartsComponent } from './components/layout/categoriespage/parts/parts.component';
import { AccessoriesComponent } from './components/layout/categoriespage/accessories/accessories.component';
import { ClothingComponent } from './components/layout/categoriespage/clothing/clothing.component';
import { Cart } from './model/model';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { RouterModule } from '@angular/router';
import { User } from './model/user';
import { AuthInterceptor } from './services/auth.interceptor';
import { PaymentComponent } from './components/layout/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    FooterComponent,
    LoginComponent,
    CreateaccountComponent,
    CartComponent,
    DetailsComponent,
    LayoutComponent,
    CategoriesComponent,
    HorizontallineComponent,
    PartsComponent,
    AccessoriesComponent,
    ClothingComponent,
    PaymentComponent,
    ShopforComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    FormsModule,
    RouterModule,
  ],
  providers: [ItemService, AuthService, Cart, DatabaseService, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
