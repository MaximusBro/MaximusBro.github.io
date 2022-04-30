$(document).ready(function () {
	//Modal
	$("[data-modal=fastOrder]").on("click", function () {
		$('.overlay, #fastOrder').fadeIn("slow")
	});
	$(".modal__close").on("click", function () {
		$(".overlay,#fastOrder,#thanks").fadeOut('slow')
	});



	$("input[name=number]").mask("+38(999) 999-99-99");

	$('.slider__img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000
	});

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

});