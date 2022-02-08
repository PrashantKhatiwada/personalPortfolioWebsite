const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const typing=document.querySelector(".typing-2")
/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
// function closeSubmenu(e) {
//   let isClickInside = menu.contains(e.target);

//   if (!isClickInside && menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//   }
// }
/* Event Listeners */
// toggle.addEventListener("click", toggleMenu, false);
// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener("click", toggleItem, false);
//   }
//   item.addEventListener("keypress", toggleItem, false);
// }
// document.addEventListener("click", closeSubmenu, false);

$(document).ready(function(){
//   $(window).scroll(function(){
//       // sticky navbar on scroll script
//       if(this.scrollY > 20){
//           $('.navbar').addClass("sticky");
//       }else{
//           $('.navbar').removeClass("sticky");
//       }
      
//       // scroll-up button show/hide script
//       if(this.scrollY > 500){
//           $('.scroll-up-btn').addClass("show");
//       }else{
//           $('.scroll-up-btn').removeClass("show");
//       }
//   });

  // slide-up script
  // $('.scroll-up-btn').click(function(){
  //     $('html').animate({scrollTop: 0});
  //     // removing smooth scroll on slide-up button click
  //     $('html').css("scrollBehavior", "auto");
  // });

  // $('.navbar .menu li a').click(function(){
  //     // applying again smooth scroll on menu items click
  //     $('html').css("scrollBehavior", "smooth");
  // });

  // // toggle menu/navbar script
  // $('.menu-btn').click(function(){
  //     $('.navbar .menu').toggleClass("active");
  //     $('.menu-btn i').toggleClass("active");
  // });

  // typing text animation script
  // var typed = new Typed(typing, {
  //     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // });

  var typed = new Typed(typing, {
      strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
 

  // owl carousel script
  // $('.carousel').owlCarousel({
  //     margin: 20,
  //     loop: true,
  //     autoplay: true,
  //     autoplayTimeOut: 2000,
  //     autoplayHoverPause: true,
  //     responsive: {
  //         0:{
  //             items: 1,
  //             nav: false
  //         },
  //         600:{
  //             items: 2,
  //             nav: false
  //         },
  //         1000:{
  //             items: 3,
  //             nav: false
  //         }
  //     }
  // });
});