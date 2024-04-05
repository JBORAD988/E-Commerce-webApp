import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuShow: boolean = false;
  searchShow: boolean = false;

  onToggle() {
    this.menuShow = !this.menuShow;
  }

  onClick() {
    this.searchShow = !this.searchShow
  }

}
