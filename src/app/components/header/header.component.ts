import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{



  constructor(){

  }


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

  menuShow: boolean = false;
  searchShow: boolean = false;
  h1show: boolean = true;
  h2show: boolean = false;

  s1show: boolean = true;
  s2show: boolean = false;

  onToggle() {
    this.menuShow = !this.menuShow;    
  }

  onClick() {
    this.searchShow = !this.searchShow
  }

  onHeart() {
    this.h1show = !this.h1show;
    this.h2show = !this.h2show;
    this.s2show = false;
    this.s1show = true
  }

  onShop() {
    this.s1show = !this.s1show;
    this.s2show = !this.s2show;
    this.h2show = false;
    this.h1show = true;
  }



  

}