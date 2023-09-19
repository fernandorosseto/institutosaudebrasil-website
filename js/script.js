const btnHamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger");

function abrirNav() {
	const nav = document.getElementById("nav");
	nav.classList.toggle("active");
	hamburgerIcon.classList.toggle("x");
}

btnHamburger.addEventListener("click", abrirNav);
