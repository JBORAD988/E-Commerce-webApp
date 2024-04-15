import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, 
      breakpoints: {
        450: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 87,
        }
      },
      centeredSlides: false,
      modules: [Navigation]
    });
  }




}
