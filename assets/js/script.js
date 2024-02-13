// const btn = document.getElementById("menu-btn");
// const nav = document.getElementById("menu");

const btn = document.get("menu-btn");
const nav = document.getElementsByClassName("menu");

console.log(btn);

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
});

function loginExc() {
	alert("Submitted!");
}
