const Slider = document.getElementById("slider");
const SliderContainer = Slider.querySelector("#slider-image-container");
const imageElement = SliderContainer.querySelector(".slider-image");

const images = [
	"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

let counter = 0;
const animationDuration = 200;
const slideDuration = 2000;

init();
// autoSlide();

function handleArrowClick(e) {
	const arrow = e.dataset.arrow;
	let multiplier = 0;

	if (arrow == "left") {
		multiplier = -1;
		slideLeft();
	} else {
		multiplier = 1;
		slideRight();
	}
	imageElement.style.opacity = "0";
	imageElement.style.rotate = `${5 * multiplier}deg`;

	setTimeout(() => {
		imageElement.style.opacity = "1";
		imageElement.style.rotate = "0deg";
	}, animationDuration);
}

function slideLeft() {
	if (counter - 1 < 0) {
		let index = images.length - 1;
		let image = images[index];

		imageElement.src = image;
		counter = index;
	} else {
		let image = images[counter - 1];
		imageElement.src = image;

		counter -= 1;
	}
}

function slideRight() {
	if (counter + 1 > images.length - 1) {
		let index = 0;
		let image = images[index];
		imageElement.src = image;
		counter = index;
	} else {
		let image = images[counter + 1];
		imageElement.src = image;

		counter += 1;
	}
}

function autoSlide() {
	setInterval(() => {
		if (counter + 1 > images.length) {
			counter = 0;
			imageElement.src = images[counter];
		} else {
			imageElement.src = images[counter];
		}
		counter += 1;
		setTimeout(() => {
			imageElement.classList.remove("fade");
		}, animationDuration);
		imageElement.classList.add("fade");
	}, slideDuration);
}

function init() {
	imageElement.src = images[counter];
	counter += 1;
}
