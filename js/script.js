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
// Menu burger
const iconMenu = document.querySelector(".hamburger");
const contacts = document.getElementById("contacts");
const services = document.getElementById("services");
let menuArrows = document.querySelectorAll(".header__arrow");
let headerItems = document.querySelectorAll(".header__list-item");
if (iconMenu) {
	const MenuBody = document.querySelector(".header__nav");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("hamburger__active");
		MenuBody.classList.toggle("header__active");
	});
}
// Modal windows for header__list
if (services) {
	const subService = services.querySelector(".header__sub-list");
	const headerItemsServices = headerItems[0];
	services.addEventListener("click", function (e) {
		subService.classList.toggle("header__sub-link__active");
		headerItemsServices.classList.toggle("header__arrows__active");
	});
}
if (services) {
	const subContact = contacts.querySelector(".header__sub-list");
	const headerItemsContacts = headerItems[1];
	contacts.addEventListener("click", function (e) {
		subContact.classList.toggle("header__sub-link__active");
		headerItemsContacts.classList.toggle("header__arrows__active");
	});
}
