const btnHamburger = document.getElementById("btnHamburger");

function abrirNav() {
	const nav = document.getElementById("nav");
	nav.classList.toggle("active");
}

btnHamburger.addEventListener("click", abrirNav);
