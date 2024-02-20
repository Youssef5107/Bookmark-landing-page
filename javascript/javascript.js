$(document).ready(function () {
	$(".main-idea").click(function () {
		$(this).find(".answer").slideToggle();
		$(this).find(".arrow").toggleClass("arrow-rotate");
	});
});



















































// function show_hide_divs(clickedBtn, activeHr, inactiveHr, buttonName) {
// 	var hr = document.querySelector("." + activeHr);
// 	var inactivehr = document.querySelectorAll("." + inactiveHr);

// 	for (i = 0; i < inactivehr.length; i++) {
// 		inactivehr[i].classList.remove("active-hr")
// 	}
// 	hr.classList.add("active-hr");

// 	var btnFontStyle = document.querySelectorAll(".main-option-btn");
// 	for (i = 0; i < btnFontStyle.length; i++) {
// 		btnFontStyle[i].classList.remove("active-main-option-btn")
// 	}

// 	buttonName.classList.add("active-main-option-btn");

// 	var visibleDiv = document.querySelectorAll(".main-option-content-area");
// 	for (i = 0; i < visibleDiv.length; i++) {
// 		visibleDiv[i].classList.remove("active");
// 	}
// 	var selectedTab = document.querySelector("#" + clickedBtn);
// 	selectedTab.classList.add("active");
// }

// function show_hide_answers(clickedBtn_acordion) {
// 	var clickedarrow = document.querySelectorAll(".main-idea");
// 	for (i = 0; i < clickedarrow.length; i++) {
// 		if (clickedarrow[i] != clickedBtn_acordion)
// 			clickedarrow[i].classList.remove("active-acordion");
// 	}
// 	if (clickedBtn_acordion.classList.contains("active-acordion")) {
// 		clickedBtn_acordion.classList.remove("active-acordion")
// 	}
// 	else (clickedBtn_acordion.classList.add("active-acordion"))
// }

// function show_meun(visibleMeun, sectionIMG, burgerMeun, hiddenLogo) {
// 	var meun = document.querySelector("." + visibleMeun);
// 	var img = document.querySelector("." + sectionIMG);
// 	var hiddenMeun = document.querySelector("." + burgerMeun);
// 	var Logo = document.querySelector("." + hiddenLogo);
// 	var fixedbody = document.querySelector("body");

// 	hiddenMeun.style.display = "none";
// 	Logo.style.display = "none";
// 	meun.style.display = "block";
// 	img.style.opacity = "0.1";
// 	fixedbody.style.position = "fixed";

// }

// function hide_meun(visibleMeun, sectionIMG, burgerMeun, hiddenLogo) {
// 	var meun = document.querySelector("." + visibleMeun);
// 	var img = document.querySelector("." + sectionIMG);
// 	var hiddenMeun = document.querySelector("." + burgerMeun);
// 	var Logo = document.querySelector("." + hiddenLogo);
// 	var freebody = document.querySelector("body");

// 	hiddenMeun.style.display = "block";
// 	Logo.style.display = "block";
// 	meun.style.display = "none";
// 	img.style.opacity = "1";
// 	freebody.style.position = "relative";

// }

// function error_message() {
// 	var error_msg = document.querySelector(".input-error-message")
// 	var input = document.querySelector(".email-bar");
// 	var errorIMG = document.querySelector(".input-error-img");
// 	if (input.innerHTML != "@") {
// 		errorIMG.style.display = "block";
// 		error_msg.style.display = "flex";
// 	}
// }
