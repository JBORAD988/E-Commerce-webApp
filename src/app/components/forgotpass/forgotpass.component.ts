import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit{
  isLogginIn: boolean = false;
  isRecoveringpassword = false;

  ForgotForm!: FormGroup;



  constructor(private  fb:FormBuilder, private toast: NgToastService, private route : Router , private auth: AuthenticationService){

    }

  ngOnInit(): void {
    this.ForgotForm = this.fb.group({
      email:['']
    })
  }




  recoverPassword(){

    this.isRecoveringpassword=true;

    this.auth.recoverpass(this.ForgotForm.value.email).subscribe(()=>{
      this.toast.info({detail:'recovery Email has been sent', summary:'A recovery Email hase been sent to your User Email',duration: 5000})
      this.route.navigate(['login'])
      this.isRecoveringpassword = false
    })
  }
}
