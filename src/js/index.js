const Slider = document.getElementById("slider");
const SliderContainer = Slider.querySelector("#slider-image-container");
const imageElement = SliderContainer.querySelector(".slider-image");

const images = [
	"https://images4.alphacoders.com/128/1289066.jpg",
	"https://wallpapercave.com/wp/wp9413235.jpg",
	"https://wallpapercave.com/wp/wp10889463.jpg",
	"https://images7.alphacoders.com/112/1126239.jpg",
	"https://images2.alphacoders.com/114/1145884.jpg",
];

let counter = 0;
const animationDuration = 200;
const slideDuration = 2000;

init();

function handleArrowClick(e) {
	const arrow = e.dataset.arrow;
	const transitionRotation = 5;
	let multiplier = 0;

	if (arrow == "left") {
		multiplier = -1;
		slideLeft();
	} else {
		multiplier = 1;
		slideRight();
	}
	imageElement.style.opacity = "0";
	imageElement.style.rotate = `${transitionRotation * multiplier}deg`;
	imageElement.style.scale = 1.5;

	setTimeout(() => {
		imageElement.style.opacity = "1";
		imageElement.style.rotate = "0deg";
		imageElement.style.scale = 1;
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
}
