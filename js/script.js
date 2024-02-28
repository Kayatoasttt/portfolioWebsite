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



