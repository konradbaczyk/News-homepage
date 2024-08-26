import { btnToggle, navMenu } from "./menuItems.js";

const heroImg = document.getElementById("hero-img");

const checkHeroImg = () => {
	if (window.innerWidth >= 768) {
		heroImg.setAttribute("src", "./assets/images/image-web-3-desktop.jpg");
		console.log(window.innerWidth);
	} else {
		heroImg.setAttribute("src", "./assets/images/image-web-3-mobile.jpg");
	}
};

const handleMenu = (e) => {
	e.preventDefault();

	if (navMenu.classList.contains("navbar__menu--active")) {
		btnToggle.style.backgroundImage = "url(../assets/images/icon-menu.svg)";
		document.body.classList.remove("no-scroll");
	} else {
		btnToggle.style.backgroundImage = "url(../assets/images/icon-menu-close.svg)";
		document.body.classList.add("no-scroll");
	}

	navMenu.classList.toggle("navbar__menu--active");
};

btnToggle.addEventListener("click", handleMenu);
window.addEventListener("resize", checkHeroImg);
window.addEventListener("DOMContentLoaded", checkHeroImg);
