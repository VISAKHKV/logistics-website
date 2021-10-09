let ham = document.querySelector("header .navbar");
let navmenu = document.querySelector("header .navmenus");
let ham1 = document.querySelector("header .navbar .ham");
let ham2 = document.querySelector("header .navbar .ham1");
let ham3 = document.querySelector("header .navbar .ham3");
let menuItems = document.querySelector("header .navmenus ul");

ham.addEventListener("click", () => {
	navmenu.classList.toggle("active");
	ham1.classList.toggle("active");
	ham2.classList.toggle("active");
	ham3.classList.toggle("active");
});
menuItems.addEventListener("click", () => {
	navmenu.classList.toggle("active");
	ham1.classList.toggle("active");
	ham2.classList.toggle("active");
	ham3.classList.toggle("active");
});
