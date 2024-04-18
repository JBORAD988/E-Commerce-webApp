import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash'
  visibility: string = 'hidden';

  isLogginIn: boolean = false;


  constructor(
    private fb: FormBuilder, 
    private fireauth: AuthenticationService, 
    private route: Router, 
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"

  }
  toggleEyeIconVisibility() {

    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';

  }



  // onSubmit2(){
  //   if (this.loginForm.valid){
  //     console.log(this.loginForm.value)
  //     //send data to database
  //     this.auth.login(this.loginForm.value).subscribe(res=>{
  //       this.toast.success({detail:"SUCCESS", summary: res.message, duration: 5000 })
  //       this.loginForm.reset();
  //       this.auth.storeToken(res.token);
  //       const tokenPayload = this.auth.decodedToken();
  //       this.userStore.serFullNameForStore(tokenPayload.unique_name);
  //       this.userStore.serRoleForStore(tokenPayload.role)
  //       // this.route.navigate(['dashboard']);
  //       console.log(tokenPayload.role)

  //     },err=>{
  //       this.toast.error({detail:"Error" ,summary:err.message , duration: 5000})
  //     })

  //   }else {
  //     console.log('form invalid')
  //     Validateform.validateAllFormFileds(this.loginForm);
  //    this.toast.warning({detail:"Fill The Details",summary:"Please Enter Username and Password",duration: 5000})

  //   }
  // }


  onSubmit() {
    this.isLogginIn = true
    this.fireauth.signIn({
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).subscribe(() => {
      this.fireauth.sendtoken()
      this.toastr.success('Logged In Successfully! ');
      this.route.navigate(['/', '/']);

    }, error => {
      this.isLogginIn = false
      this.route.navigate(['login']);
    })
    console.log('register')
    console.log(this.loginForm.value)

  }



}
