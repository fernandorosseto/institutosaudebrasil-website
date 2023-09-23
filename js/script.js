const btnHamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const menuItens = document.querySelectorAll("#menu a"); // Seleciona todos os links dentro do menu
const logo = document.getElementById("logo");
const menu = document.getElementById("menu");

// Função para abrir e fechar o menu dropdown
function handleNav() {
	nav.classList.toggle("active");
	btnHamburger.classList.toggle("x");
}

// Função para fechar o menu dropdown
function closeNav() {
	nav.classList.remove("active");
	btnHamburger.classList.remove("x");
}



btnHamburger.addEventListener("click", handleNav);

menuItens.forEach(function (item) {
	item.addEventListener("click", function () {
		handleNav(); // Fecha o menu quando um item de menu é clicado
	});
});


logo.addEventListener("click", closeNav);

window.addEventListener("load", function () {
	window.scrollTo(0, 0);
});
