const links = Array.from(document.querySelectorAll(".links>a"));
const path = window.location.href.split("#");
if (path[path.length - 1] === "" || path.length === 1) {
	links[0].classList.add("active");
}
links.forEach((item) => {
	const linkPath = item.href.split("#");
	if (path[path.length - 1] === linkPath[linkPath.length - 1]) {
		item.classList.add("active");
	}
	item.addEventListener("click", (e) => {
		links.forEach((item) => {
			item.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});
