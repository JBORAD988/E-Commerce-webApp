import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  autoplaycard : string = '{"delay": 3000, "speed": 1000}'

  


  ngOnInit(): void {


    var autoplay = document.querySelector('swiper-container') as HTMLElement



    autoplay.addEventListener("mouseover",()=>{
    this.autoplaycard = "false"

    })

    autoplay.addEventListener("mouseleave",()=>{
      this.autoplaycard = '{"delay": 3000, "speed": 1000}'
      
    })


    // var time = document.getElementById("time");
    // var day = document.getElementById("day");
    // var midday = document.getElementById("midday");

    // var clock = setInterval(
    //   function calcTime() {
    //     var date_now = new Date();
    //     var hr: string | number  = date_now.getHours();
    //     var min: string | number  = date_now.getMinutes();
    //     var sec: string | number  = date_now.getSeconds();
    //     var middayValue = "AM"
    //     // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //     // day!.textContent = days[date_now.getDay()];

    //     middayValue = (hr >= 12) ? "PM" : "AM";

    //     if (hr == 0) {
    //       hr = 12;
    //     }
    //     else if (hr > 12) {
    //       hr -= 12;
    //     }

    //     hr = (hr < 10) ? "0" + hr : hr;
    //     min = (min < 10) ? "0" + min : min;
    //     sec = (sec < 10) ? "0" + sec : sec;

    //     time!.textContent = hr + ":" + min + ":" + sec;
    //     midday!.textContent = middayValue;
    //   },
    //   1000
    // );



    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      spaceBetween: 87,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-testmonials-next1',
        prevEl: '.swiper-button-testmonials-prev1',
      },

    });

    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 4,
      spaceBetween: 87,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-testmonials-next',
        prevEl: '.swiper-button-testmonials-prev',
      },

    });

  
    const icon = document.querySelector(".click") as HTMLElement;
    const icon1 = document.querySelector(".click1") as HTMLElement;
    const mcat = document.querySelector(".mcat") as HTMLElement;
    const wcat = document.querySelector(".wcat") as HTMLElement;
    const move = document.querySelector(".move") as HTMLElement;
    // const btn = document.querySelector(".ctn-btn2") as HTMLElement;
    // const btn2 = document.querySelector(".ctn-btn22") as HTMLElement;

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
      // btn2.style.display = 'block';
      // btn.style.display = 'none';
    })

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const isClickInside = mcat.contains(target) || icon.contains(target);
      if (!isClickInside) {
        mcat.style.display = 'none';
        // btn2.style.display = 'none';
        // btn.style.display = 'block';
      }
    });


    icon1.addEventListener("click", () => {
      wcat.style.display = 'block';
      console.log('j');

      // btn2.style.display = 'block';
      // btn.style.display = 'none';
    })

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const isClickInside = wcat.contains(target) || icon1.contains(target);
      if (!isClickInside) {
        wcat.style.display = 'none';
        // btn2.style.display = 'none';
        // btn.style.display = 'block';
      }
    });




  }



}



