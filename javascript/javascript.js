function show_hide_divs(clickedBtn, activeHr, inactiveHr) {
	var hr = document.querySelector("." + activeHr);
	var inactivehr = document.querySelectorAll("." + inactiveHr);
	for (i = 0; i < inactivehr.length; i++) {
		inactivehr[i].classList.remove("active-hr")
	}
	hr.classList.add("active-hr")

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

function show_meun(visibleMeun, sectionIMG, burgerMeun, hiddenLogo) {
	var meun = document.querySelector("." + visibleMeun);
	var img = document.querySelector("." + sectionIMG);
	var hiddenMeun = document.querySelector("." + burgerMeun);
	var Logo = document.querySelector("." + hiddenLogo);

	hiddenMeun.style.display = "none";
	Logo.style.display = "none";
	meun.style.display = "block";
	img.style.opacity = "0.1";

}

function hide_meun(visibleMeun, sectionIMG, burgerMeun, hiddenLogo) {
	var meun = document.querySelector("." + visibleMeun);
	var img = document.querySelector("." + sectionIMG);
	var hiddenMeun = document.querySelector("." + burgerMeun);
	var Logo = document.querySelector("." + hiddenLogo);

	hiddenMeun.style.display = "block";
	Logo.style.display = "block";
	meun.style.display = "none";
	img.style.opacity = "1";

}