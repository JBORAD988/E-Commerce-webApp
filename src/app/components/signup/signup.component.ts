import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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


  constructor(private fb: FormBuilder){

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

  onSingup(){
    console.log(this.signUpForm.value);

  }



}
