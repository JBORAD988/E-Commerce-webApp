import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  autoplaycard: string = '{"delay": 3000, "speed": 1000}';
  menuShow: boolean = false;





  ngOnInit(): void {


    var autoplay = document.querySelector('swiper-container') as HTMLElement



    autoplay.addEventListener("mouseover", () => {
      this.autoplaycard = "false"

    })

    autoplay.addEventListener("mouseleave", () => {
      this.autoplaycard = '{"delay": 3000, "speed": 1000}'

    })

    //   var swiper = new Swiper(".swiper-container", {
    //     slidesPerView: 1,
    //     spaceBetween: 87,
    //     width: 50,
    //     effect: 'cube',
    //     cubeEffect: {
    //         shadow: true,
    //         slideShadows: true,
    //         shadowOffset: 20,
    //         shadowScale: 0.94,
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: 'bullets',
    //         clickable: true,
    //     },
    //     loop: true,
    //     grabCursor: true,
    // });





    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-testmonials-next1',
        prevEl: '.swiper-button-testmonials-prev1',
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

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-testmonials-next1',
        prevEl: '.swiper-button-testmonials-prev1',
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1920: {
          slidesPerView: 6,
          spaceBetween: 87,
        }
      },
      centeredSlides: false,
      modules: [Navigation]

    });


    const icon = document.querySelector(".click") as HTMLElement;
    const icon1 = document.querySelector(".click1") as HTMLElement;
    const mcat = document.querySelector(".mcat") as HTMLElement;
    const wcat = document.querySelector(".wcat") as HTMLElement;
    const move = document.querySelector(".move") as HTMLElement;

    window.addEventListener("scroll", () => {

      if (window.scrollY === 0) {
        move.style.display = 'none';
      } else {
        move.style.display = 'block';
      }
    })


    move.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    icon.addEventListener("click", () => {
      mcat.style.display = 'block';
    })

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const isClickInside = mcat.contains(target) || icon.contains(target);
      if (!isClickInside) {
        mcat.style.display = 'none';
      }
    });


    icon1.addEventListener("click", () => {
      wcat.style.display = 'block';
      console.log('j');
    })

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const isClickInside = wcat.contains(target) || icon1.contains(target);
      if (!isClickInside) {
        wcat.style.display = 'none';
        console.log("mituaaaaaaaaaaaaaaaaaaaaaaaaaa");

      }
    });

  }


  onMenu() {
    this.menuShow = !this.menuShow;
  }

  // timer


  d1: any
  m1: any
  h1: any
  s1: any

  d2: any
  m2: any
  h2: any
  s2: any

  constructor() {
    this.timer1();
    setInterval(() => {
      this.timer1();
      this.timer2();
    }, 1000);
  }


  timer1() {
    const currentDate = new Date();
    const targetDate = new Date(2024, 3, 28, 3, 4, 45, 43434);
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const remainingSeconds = Math.floor((timeDifference / 1000) % 60);
    const remainingMinutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const remainingHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    this.s1 = remainingSeconds;
    this.m1 = remainingMinutes;
    this.d1 = remainingDays;
    this.h1 = remainingHours;
  }


  timer2() {
    const currentDate = new Date();
    const targetDate = new Date(2024, 3, 28, 3, 4, 45, 43434);
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const remainingSeconds = Math.floor((timeDifference / 1000) % 60);
    const remainingMinutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const remainingHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


    this.s2 = remainingSeconds;
    this.m2 = remainingMinutes;
    this.d2 = remainingDays;
    this.h2 = remainingHours;
  }


  wcat() {
    const wcat = document.querySelector(".wcat") as HTMLElement;
    wcat.style.display = 'block';

    console.log("catacombas")
  }



}



