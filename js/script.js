$(document).ready(function () {
	//Modal
	$("[data-modal=fastOrder]").on("click", function () {
		$('.overlay, #fastOrder').fadeIn("slow");
	});
	$(".modal__close").on("click", function () {
		$(".overlay,#fastOrder,#thanks").fadeOut('slow');
	});

	$("input[name=number]").mask("+38(999) 999-99-99");

	$("form").submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "../mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$("#fastOrder").fadeOut();
			$(".overlay, #thanks").fadeIn();

			$("form").trigger("reset");
		});
		return false;
	});
	// Slider
	$('.slider__img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000
	});
});
// Menu burger and header__list interactive
const iconMenu = document.querySelector(".hamburger");
const contacts = document.getElementById("contacts");
const services = document.getElementById("services");
let menuArrows = document.querySelectorAll(".header__arrow");
let headerItems = document.querySelectorAll(".header__list-item");
const subContact = contacts.querySelector(".header__sub-list");
const subService = services.querySelector(".header__sub-list");
const headerItemsContacts = headerItems[1];
const headerItemsServices = headerItems[0];
if (iconMenu) {
	const MenuBody = document.querySelector(".header__nav");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("hamburger__active");
		MenuBody.classList.toggle("header__active");
	});
}
// Modal windows for header__list
if (services) {
	services.addEventListener("click", function (e) {
		subService.classList.toggle("header__sub-link__active");
		headerItemsServices.classList.toggle("header__arrows__active");
		if (subContact.classList.contains("header__sub-link__active")) {
			subContact.classList.remove("header__sub-link__active");
			headerItemsContacts.classList.toggle("header__arrows__active");
		}
	});
}
if (services) {
	contacts.addEventListener("click", function (e) {
		subContact.classList.toggle("header__sub-link__active");
		headerItemsContacts.classList.toggle("header__arrows__active");
		if (subService.classList.contains("header__sub-link__active")) {
			subService.classList.remove("header__sub-link__active");
			headerItemsServices.classList.toggle("header__arrows__active");
		}
	});
}

const showMore = document.getElementById("showmore");
if (showMore) {
	showMore.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = showMore.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}

