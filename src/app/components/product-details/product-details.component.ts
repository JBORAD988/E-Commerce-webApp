import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  quantity: number = 1;

  ngOnInit(): void {

    const gray = document.querySelector('.gray') as HTMLElement;
    const red = document.querySelector('.red') as HTMLElement;

    gray.addEventListener("click", () => {
      gray.style.border = "2px solid black"
      red.style.border = "none"
    });

    red.addEventListener("click", () => {
      red.style.border = "2px solid black"
      gray.style.border = "none"
    });

  }


  max() {
    this.quantity += 1;
  }

  min() {
    this.quantity -= 1;
    if(this.quantity <= 0) {
      this.quantity = 0;
    }
  }

}
