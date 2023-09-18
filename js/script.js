const btnHamburger = document.getElementById("hamburger");
const hamburger = document.getElementById('hamburger');

function abrirNav() {
	const nav = document.getElementById("nav");
	nav.classList.toggle("active");
}

function trocarIcone() {
	hamburger.classList.toggle('x');
}

function executarAmbasFuncoes() {
    abrirNav();
    trocarIcone();
}

btnHamburger.addEventListener("click", executarAmbasFuncoes);