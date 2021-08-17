const navbar = document.querySelector(".header--right");
const navlinks = document.querySelector(".nav-links");
const works = document.querySelector(".recent-works");
const navLogo= document.querySelector(".nav-logo");
const cross= document.querySelector(".cross");

navbar.addEventListener("click",()=>{
    navlinks.classList.add("active");
    works.classList.add("active");
    navLogo.classList.add("nav-active");
    cross.classList.add("cross-active");
})

cross.addEventListener("click",()=>{
    navlinks.classList.remove("active");
    works.classList.remove("active");
    navLogo.classList.remove("nav-active");
    cross.classList.remove("cross-active");
})











