import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit{
  isLogginIn: boolean = false;
  isRecoveringpassword: boolean = false;

  ForgotForm!: FormGroup;



  constructor(private  fb:FormBuilder, private toastr:ToastrService, private route : Router , private auth: AuthenticationService){

    }

  ngOnInit(): void {
    this.ForgotForm = this.fb.group({
      email:['']
    })
  }




  recoverPassword(){

    this.isRecoveringpassword=true;

    this.auth.recoverpass(this.ForgotForm.value.email).subscribe(()=>{
      this.toastr.success('A recovery Email hase been sent to your User Email');
      this.route.navigate(['login'])
      this.isRecoveringpassword = false
    })
  }
}
