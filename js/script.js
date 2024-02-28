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

// // sticky navbar
// window.addEventListener('scroll', function() {
//     let navbar = document.getElementsByClassName("navbar")[0];
//     let sticky = navbar.offsetTop;

//     if (window.scrollY >= sticky) {
//         navbar.classList.add("sticky")
//       } else {
//         navbar.classList.remove("sticky");
//       }

// })

// Navbar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    console.log("clicked");
    sidebar.classList.toggle('active');
};

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSection = document.querySelectorAll("main-content");

let lastId;
let cur=[];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if(section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add("current");
        }else{
            link.classList.remove("current");
        }
    })
})


// document.addEventListener("DOMContentLoaded", function() {
//     // Get all the links inside the sidebar
//     const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

//     // Add click event listeners to each link
//     sidebarLinks.forEach(function(link) {
//         link.addEventListener("click", function(event) {
//             // Prevent the default behavior of the link
//             event.preventDefault();

//             // Get the target section ID from the link's href attribute
//             const targetSectionId = link.getAttribute("href").substring(1);

//             // Scroll to the target section smoothly
//             document.getElementById(targetSectionId).scrollIntoView({
//                 behavior: "smooth"
//             });

//             // Optionally, close the sidebar
//             document.querySelector(".sidebar").classList.remove("active");
//         });
//     });
// });



