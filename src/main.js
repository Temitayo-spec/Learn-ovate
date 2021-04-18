if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("sw.js")
		.then((registration) => {
			console.log("SW Registered");
			console.log(registration);
		})
		.catch((error) => {
			console.log("SW Registration Failed");
			console.log(error);
		});
}

window.addEventListener("scroll", () => {
	const one = document.querySelector(".one");
	const content = document.querySelector(".sliding");
	const contentPosition = content.getBoundingClientRect().top;
	const screenPosition = (2 * window.innerHeight) / 3;
	if (contentPosition < screenPosition) {
		one.classList.add("active");
	} else {
		one.classList.remove("active");
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth == "800px") {
		const nav_links = document.querySelector("nav.navbar ul");
		nav_links.style.display = "flex";
	}
})