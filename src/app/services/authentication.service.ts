import { Injectable } from '@angular/core';
import { from, Observable, of } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
// import Swal from 'sweetalert2'



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private authfire: AngularFireAuth, private route: Router, private firestore: AngularFirestore, private spinner: NgxSpinnerService) { }


  signIn(params: SignIn): Observable<any> {
     this.spinner.show();
    return from(this.authfire.signInWithEmailAndPassword(
      params.email, params.password
    )).pipe(
      tap(()=>{
        setTimeout(()=>{
          this.spinner.hide();
        },2000)
      },error=>{
        console.log(error)
        this.spinner.hide();
      })
    )
    }

  signUp(user:SignUp): Observable <any>{
    this.spinner.show();
return from(this.authfire.createUserWithEmailAndPassword(user.Email, user.password)).pipe(
  tap(() => {
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  })
);
  }


  sendtoken() {
    const length = 32
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@~#$%^&*()_+|}{:;<>?';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("token", token)

  }
  setemailtoken(email: any) {
    localStorage.setItem("id", email)
  }

  signout() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this.route.navigate(['login'])


  }

  deleteUser(uid: any) {
    console.log(uid)
  }


  recoverpass(email: string): Observable<void> {
    this.spinner.show();
    return from(this.authfire.sendPasswordResetEmail(email)).pipe(tap(()=>{
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
    },error=>{
      console.log(error)
      this.spinner.hide();
    }))
  }


  AuthLogin(provider: any) {
    return this.authfire
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!', result.user);
        return result.user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  get IsLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }


}

type SignIn = {
  email: string; password: string;
}
type SignUp = {
  Email: string; password: string;
}
