import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { AccountComponent } from './components/account/account.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'forgotpass', component: ForgotpassComponent},
  { path: 'cart', component: CartComponent ,canActivate:[authGuard] },
  { path: 'error', component: ErrorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent  ,canActivate:[authGuard]},
  { path: 'about', component: AboutUsComponent  },
  { path: 'wishlist', component: WishlistComponent ,canActivate:[authGuard] },
  { path: 'account', component: AccountComponent ,canActivate:[authGuard] },
  { path: 'cart/checkout', component: CheckoutComponent  ,canActivate:[authGuard]},
  { path: 'product', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
