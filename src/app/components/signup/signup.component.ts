import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {




  type: string = "password"
  isText: boolean = false;
  eyeIcon:string = 'fa-eye-slash'
  visibility: string = 'hidden';


  constructor(){

  }

  ngOnInit(): void {

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"

  }
  toggleEyeIconVisibility() {

    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';

  }





}
