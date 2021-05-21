const toggleMenu = document.querySelectorAll(".toggle-menu")[0];
console.log(toggleMenu);
const navbarLinks = document.querySelectorAll(".navbar-links")[0];
console.log(navbarLinks);
toggleMenu.addEventListener("click",()=>{
    navbarLinks.classList.toggle("active");
})