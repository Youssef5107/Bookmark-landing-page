function show_hide_divs(clickedBtn) {
	var visibleDiv = document.querySelectorAll(".main-option-content-area");
	for (i = 0; i < visibleDiv.length; i++) {
		visibleDiv[i].classList.remove("active");
	}
	var selectedTab = document.querySelector("#" + clickedBtn);
	selectedTab.classList.add("active");
}

function show_hide_answers(clickedBtn_acordion) {
	var clickedarrow = document.querySelectorAll(".main-idea");
	for (i = 0; i < clickedarrow.length; i++) {
		if (clickedarrow[i] != clickedBtn_acordion)
			clickedarrow[i].classList.remove("active-acordion");
	}
	if (clickedBtn_acordion.classList.contains("active-acordion")) {
		clickedBtn_acordion.classList.remove("active-acordion")
	}
	else (clickedBtn_acordion.classList.add("active-acordion"))
}