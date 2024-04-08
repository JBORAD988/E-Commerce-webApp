import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import Validateform from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  type: string = "password"
  isText: boolean = false;
  eyeIcon:string = 'fa-eye-slash'
  visibility: string = 'hidden';

  isLogginIn: boolean = false;


  constructor(private fb:FormBuilder , private auth: AuthService,private fireauth: AuthenticationService, private userStore:UserStoreService, private route: Router , private toast: NgToastService){

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }

  hideShowPass(){
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


  onSubmit(){
    this.isLogginIn = true
    this.fireauth.signIn({
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).subscribe(()=>{

    },error => {
      this.isLogginIn = false
      this.route.navigate(['login'])
    })
    console.log('register')
    console.log(this.loginForm.value)
    this.toast.success({detail:"Login",summary:"Login successful",duration: 5000});
    this.route.navigate(['/','signup'])

  }



}
