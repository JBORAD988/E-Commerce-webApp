import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;



  type: string = "password"
  isText: boolean = false;
  eyeIcon:string = 'fa-eye-slash'
  visibility: string = 'hidden';
  uid:string = ''


  constructor(private fb: FormBuilder, private fireauth: AuthenticationService,  private toast: NgToastService, private router: Router){

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: [''],
      userName: [''],
      password: ['',],
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


  onSingup() {


    this.fireauth.signUp({
      Email: this.signUpForm.value.userName,
      password: this.signUpForm.value.password
    }).subscribe((userCredential)=>{
      this.uid = userCredential.user.uid;
      localStorage.setItem('uid',this.uid);
      this.toast.success({detail: "SUCCESS", summary: "User Created Successfully ", duration: 5000});
      this.signUpForm.reset();
      this.router.navigate(['login']);

      // Call sendUserData after successful sign-up
      // this.dataservice.sendUserdata({
      //   firstname: this.signUpForm.value.firstName,
      //   lastname: this.signUpForm.value.lastName,
      //   phone: this.signUpForm.value.phone,
      //   city: this.signUpForm.value.city,
      //   role: this.signUpForm.value.role,
      //   email: this.signUpForm.value.email,
      //   userid: localStorage.getItem('uid')
      // })
    }, error => {
      console.error(error);
      this.toast.warning({detail: "Error", summary: error.message, duration: 5000});
    });
  }



}
