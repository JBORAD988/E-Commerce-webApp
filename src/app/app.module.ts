import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 75cc740293f8ea65f722166e546be14654ae52e3

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    LoginComponent
>>>>>>> 75cc740293f8ea65f722166e546be14654ae52e3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
