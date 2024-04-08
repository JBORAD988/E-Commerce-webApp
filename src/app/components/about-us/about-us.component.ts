import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


   ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
   }


  

}
