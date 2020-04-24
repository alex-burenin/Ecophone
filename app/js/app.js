document.addEventListener("DOMContentLoaded", function() {

	const selectElement = document.querySelector("[data-select]");
	const selectReal = document.querySelector("#selectReal");

	selectElement.addEventListener("click", function(event) {
		if (event.target.hasAttribute("data-select-item")) {
			console.log("click on ITEM!");
			const itemTitle = event.target.getAttribute("data-select-item");
			console.log(itemTitle);
			event.target
				.closest("[data-select]")
				.querySelector("[data-select-title]").textContent = itemTitle;
			event.target
				.closest("[data-select]").querySelector(".header-select__dropdown")
				.classList.toggle("hidden");

			selectReal.value = itemTitle;

			

		} else {
			console.log("click on TITLE AREA!");
			this.querySelector(".header-select__dropdown")
			.classList.toggle("hidden");
		}

	});

});
