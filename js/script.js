const btnHamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const menuItens = document.querySelectorAll("#menu a"); // Seleciona todos os links dentro do menu
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

function abrirNav() {
	nav.classList.toggle("active");
	btnHamburger.classList.toggle("x");
	console.log(nav.classList);
}
console.log(nav.classList);
btnHamburger.addEventListener("click", abrirNav);

menuItens.forEach(function (item) {
	item.addEventListener("click", function () {
		abrirNav(); // Fecha o menu quando um item de menu é clicado
	});
});

if (menu.getPropertyValue("visibility") === "visible") {
	logo.addEventListener("click", function () {
		abrirNav();
	});
}

window.addEventListener("load", function () {
	window.scrollTo(0, 0);
});
