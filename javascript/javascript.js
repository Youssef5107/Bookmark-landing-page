$(document).ready(function () {
	$(".burger-meun-area").click(function () {
		$(".bookMark").addClass("active-nav-hidden-content");
		$(".burger-img").addClass("active-nav-hidden-content");
		$(".section-img-area").css('opacity', '.1')
		$("body").css("position", "fixed")
		$(".active-meun").slideDown()
	});
	$(".close-btn").click(function () {
		$(".bookMark").removeClass("active-nav-hidden-content");
		$(".burger-img").removeClass("active-nav-hidden-content");
		$(".section-img-area").css('opacity', '1')
		$("body").css("position", "")
		$(".active-meun").slideUp()
	});
	$(".main-option-btn").click(function () {
		$(".btn-hr").removeClass("active-hr");
		$(".main-option-btn").removeClass("active-main-option-btn")
		$(this).addClass("active-main-option-btn")
		$(this).siblings(".btn-hr").addClass("active-hr");
	});

	$(".main-idea").click(function () {
		$(this).find(".answer").slideToggle();
		$(this).find(".arrow").toggleClass("arrow-rotate");

	})
	$(".submit-btn").click(function () {
		if ($(".email-bar").value != "@") {
			$(".input-error-img").css('display', 'block');
			$(".input-error-message").css('display', 'flex')
		}

	});
});

function show_hide_divs(clickedBtn) {
	var visibleDiv = document.querySelectorAll(".main-option-content-area");
	for (i = 0; i < visibleDiv.length; i++) {
		visibleDiv[i].classList.remove("active");
	}
	var selectedTab = document.querySelector("#" + clickedBtn);
	selectedTab.classList.add("active");
}
