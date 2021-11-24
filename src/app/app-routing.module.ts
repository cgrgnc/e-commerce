import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/layout/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './components/layout/createaccount/createaccount.component';
import { ShopforComponent } from './components/layout/shopfor/shopfor.component';
import { DetailsComponent } from './components/layout/details/details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoriesComponent } from './components/layout/categoriespage/categories/categories.component';
import { ClothingComponent } from './components/layout/categoriespage/clothing/clothing.component';
import { PartsComponent } from './components/layout/categoriespage/parts/parts.component';
import { AccessoriesComponent } from './components/layout/categoriespage/accessories/accessories.component';
import { CartComponent } from './components/layout/cart/cart.component';
import { PaymentComponent } from './components/layout/payment/payment.component';

const routes: Routes = [
  { path: '' , component: LayoutComponent,
    children: [
      { path: '', component: ShopforComponent},
      { path: "login", component: LoginComponent},
      { path: "signup", component: CreateaccountComponent},
      { path: 'categories', component: CategoriesComponent},
      { path: 'details', component: DetailsComponent},
      { path: 'clothing', component: ClothingComponent},
      { path: 'parts', component: PartsComponent},
      { path: 'accessories', component: AccessoriesComponent},
      { path: 'cart', component: CartComponent},
      { path: 'payment', component: PaymentComponent}
    ]

},
  { path: '**', redirectTo: ''}


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
