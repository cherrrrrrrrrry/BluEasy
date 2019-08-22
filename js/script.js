// Плавный якорь logo
$(document).ready(function () {
	$("#header-logo").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});
/*--*/

// Главное меню
$(document).ready(function () {
	$("#main-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
});
/*--*/

// Меню в подвале
$(document).ready(function () {
	$("#footer-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
});
/*--*/


// Слайдер "Портфолио"
let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.getElementsByClassName('dot');
showSlides(slideIndex);

function showSlides(index) {
	if (index > slides.length) {
		slideIndex = 1;
	};
	if (index < 1) {
		slideIndex = slides.length;
	};
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	};
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active')
	};
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(index) {
	showSlides(slideIndex += index);
}

function currentSlide(index) {
	showSlides(slideIndex = index);
}

dotsWrap.addEventListener('click', function (event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
});
/*--*/