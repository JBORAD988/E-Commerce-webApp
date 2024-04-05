import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuShow: boolean = false;
  menuShow2: boolean = false;

  onToggle() {
    this.menuShow = !this.menuShow;
  }

  onToggle2(){
    this.menuShow2 = !this.menuShow2;
    console.log(this.menuShow2)
  }

}
