import { style } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  menuShow: boolean = false;
  searchShow: boolean = false;

   
  constructor(private router: Router, private authentication: AuthenticationService,  private toastr:ToastrService,  private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    

    const icon = document.querySelector(".acc") as HTMLElement;
    const menu = document.querySelector(".acc-menu") as HTMLElement;

 
    

    icon.addEventListener("click", () => {
      console.log("mouse ic");
      menu.style.display = 'block';     
    });


    // icon.addEventListener("mouseleave",()=>{
    //   console.log("mouse lv");
    //   menu.style.display = 'none';
    // })

    // menu.addEventListener("mouseleave",()=>{
    //   console.log("mouse lv");
    //   menu.style.display = 'none';
    // })

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const isClickInside = menu.contains(target) || icon.contains(target);
      if (!isClickInside) {
        menu.style.display = 'none';
      }
    });

  }


  hidebutton(){
    const sign = document.querySelector(".sign") as HTMLElement;

    if(this.authentication.IsLoggedIn) {
      sign.style.display = 'none';
    }
    else{
      sign.style.display = 'block';
    }
  }

  getCurrentRoutePath(): void {
    const url = this.router.url
    this.changedIcon(url)
  }

  onToggle() {
    this.menuShow = !this.menuShow;    
  }

  onClick() {
    this.searchShow = !this.searchShow
  }

  changedIcon(urldata:string) {

    const favIcon = document.querySelector('.fav-icon') as HTMLElement;

    if (urldata == '/wishlist') {
      favIcon.style.color = '#DB4444';
    } else {
      favIcon.style.color = 'black'
    }

    const cartIcon = document.querySelector('.cart-icon') as HTMLElement;

    if (urldata == '/cart') {
      cartIcon.style.color = '#DB4444';
    } else {
      cartIcon.style.color = 'black'
    }

    const userIcon = document.querySelector('.user-icon') as HTMLElement;

    if (urldata == '/account') {
      userIcon.style.color = '#DB4444';
    } else {
      userIcon.style.color = 'black'
    }

    const homeBtn = document.querySelector('.home-btn') as HTMLElement;

    if (urldata == '/') {
      homeBtn.style.color = '#DB4444';
      homeBtn.style.fontWeight = '500'
    } else {
      homeBtn.style.color = 'black'
      homeBtn.style.fontWeight = '400'
    }

    const conBtn = document.querySelector('.con-btn') as HTMLElement;

    if (urldata == '/contact') {
      conBtn.style.color = '#DB4444';
      conBtn.style.fontWeight = '500'
    } else {
      conBtn.style.color = 'black'
      conBtn.style.fontWeight = '400'
    }

    const abtBtn = document.querySelector('.abt-btn') as HTMLElement;

    if (urldata == '/about') {
      abtBtn.style.color = '#DB4444';
      abtBtn.style.fontWeight = '500'
    } else {
      abtBtn.style.color = 'black'
      abtBtn.style.fontWeight = '400'
    }

    const signBtn = document.querySelector('.sign-btn') as HTMLElement;

    if (urldata == '/signup') {
      signBtn.style.color = '#DB4444';
      signBtn.style.fontWeight = '500'
    } else {
      signBtn.style.color = 'black'
      signBtn.style.fontWeight = '400'
    }

  }

  logOut() {
    this.spinner.show()
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    this.toastr.success('Logged Out Successfully! ')
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }




  

}