const btnHamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const menuItens = document.querySelectorAll("#menu a"); // Seleciona todos os links dentro do menu
const logo = document.getElementById("logo");
const menu = document.getElementById("menu");

function abrirNav() {
	nav.classList.toggle("active");
	btnHamburger.classList.toggle("x");
}

btnHamburger.addEventListener("click", abrirNav);

menuItens.forEach(function (item) {
	item.addEventListener("click", function () {
		abrirNav(); // Fecha o menu quando um item de menu é clicado
	});
});

function fecharNav() {}

logo.addEventListener("click", fecharNav);

window.addEventListener("load", function () {
	window.scrollTo(0, 0);
});
