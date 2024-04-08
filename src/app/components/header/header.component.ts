import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuShow: boolean = false;
  searchShow: boolean = false;
  h1show: boolean = true;
  h2show: boolean = false;

  s1show: boolean = true;
  s2show: boolean = false;

  onToggle() {
    this.menuShow = !this.menuShow;
    console.log(this.menuShow);
    
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
