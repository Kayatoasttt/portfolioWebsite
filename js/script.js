// Progressbar

let progress = document.getElementsByClassName("progressbar")[0];
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function() {
    let progressHeight = (window.scrollY / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
});



// reveal elements when scrolling
window.addEventListener('scroll', function() {
    let reveals = document.querySelectorAll(".reveal");

    for(let i of reveals) {
        let windowheight = window.innerHeight;
        let revealtop = i.getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            i.classList.add("active");
        } else {
            i.classList.remove("active");
        }
    }
});

// Navbar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    console.log("clicked");
    sidebar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", event => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("current");
                document.querySelector("nav ul li a[href*=" + id + "]").classList.add("current");
            })
        }
    })
})

// var swiperNodes = "";
// var pagination = '<div class=swiper-pagination></div>';
// var next_prev_buttons = '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>'; 
// // var scrollbar = '<div class="swiper-scrollbar"></div>';
// var swiperNodes = swiperNodes.concat(pagination, next_prev_buttons);
// /* loop throw all swipers on the page */
// $('.swiper-container').each(function( index ) {
//   $( this ).append(swiperNodes);
// });


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    loop: true,
    centeredSlides: true,
    fadeEffect: { crossFade: true },
    grabCursor : true
    // loopFillGroupWithBlank: true,
  });

// var mySwiper = new Swiper ('.swiper-container', {
//     // Optional parameters
//     spaceBetween: 30,
//     freeMode: false,
//     loop: true,
//     centeredSlides: false,
//     // Enable lazy loading
//     lazy: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     keyboard: {
//       enabled: true,
//     },
//     breakpoints: {
//       0: { /* when window >=0px - webflow mobile landscape/portriat */
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       767: { /* when window >= 767px - webflow tablet */
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       988: { /* when window >= 988px - webflow desktop */
//         slidesPerView: 3,
//         spaceBetween: 40,
//       }
//     },
//     /* uncomment if you want autoplay slider
//     autoplay: {
//       delay: 3000,
//     },
//     */
//     /* uncomment if you want scrollbar
//      scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: true,
//       },
//     */
//   })



