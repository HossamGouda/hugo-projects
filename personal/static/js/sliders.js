/*-main slider function-*/
function slider(name) {

	/*-slider position number-*/
	let slidePosition = 1;

	/*-calling function to show current slider slide-*/
	viewSlide(slidePosition);

	/*-slider control buttons-*/
	let nextButton = document.querySelector("#"+ name +" .prev");
	let prevButton = document.querySelector("#"+ name +" .next");

	/*-function responsible on moving slides-*/
	function sliderMover(n) {
		viewSlide(slidePosition += n);
	}

	/*-add event on click on next button-*/
	nextButton.addEventListener("click", function () {
		sliderMover(1);
	});

	/*-add event on click on prev button-*/
	prevButton.addEventListener("click", function () {
		sliderMover(-1);
	});

	/*-function to show current slider slide-*/
	function viewSlide(n) {
		let i;
		/*-define variable to store slides for every section-*/
		let slides = document.querySelectorAll("#"+ name +" .slides");
		/*-if n number grater than slides we start from begin again-*/
		if (n > slides.length) { slidePosition = 1 }
		/*-if n number lower than 1 we view the last slide-*/
		if (n < 1) { slidePosition = slides.length }
		/*-loop throw slides-*/
		for (i = 0; i < slides.length; i++) {
			/*-hide all slides-*/
			slides[i].style.display = "none";
		}
		/*-show first slide-*/
		slides[slidePosition - 1].style.display = "block";
	}

}

/*-call work slider-*/
slider("work");

/*-call reviews slider-*/
slider("reviews");