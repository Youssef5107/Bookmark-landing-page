function show_hide_divs(clickedBtn) {
	var visibleDiv = document.querySelectorAll(".main-option-content-area");
	for (i = 0; i < visibleDiv.length; i++) {
		visibleDiv[i].classList.remove("active");
	}
	var selectedTab = document.querySelector("#" + clickedBtn);
	selectedTab.classList.add("active");
}