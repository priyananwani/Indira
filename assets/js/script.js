const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
	alert("adsadsa");
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
});

function loginExc() {
	alert("Submitted!");
}
