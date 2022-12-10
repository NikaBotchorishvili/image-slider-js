let counter = 0;

const images = [
	"https://images4.alphacoders.com/128/1289066.jpg",
	"https://wallpapercave.com/wp/wp9413235.jpg",
	"https://wallpapercave.com/wp/wp10889463.jpg",
	"https://images7.alphacoders.com/112/1126239.jpg",
	"https://images2.alphacoders.com/114/1145884.jpg",
];
const imageElement = document.querySelector(".slider-image");

// 	Transition duration
const animationDuration = 350;

// 	Required for auto sliding
const slideDuration = 10000;

// 	Degrees of rotation during transitions
const transitionRotation = 2;

init();
autoSlide();

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

	imageElement.animate(
		[
			{ opacity: 1, rotate: "0deg", scale: 1, filter: "blur(10px)", offset: 0 },
			{
				opacity: 0,
				rotate: `${transitionRotation * multiplier}deg`,
				scale: 1.5,
				offset: 1,
			},
		],
		{
			duration: animationDuration,
			easing: "ease-in-out",
		}
	);
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
			counter++;
			imageElement.src = images[counter];
			imageElement.animate(
				[
					{ opacity: 1, scale: 1, offset: 0 },
					{
						opacity: 0,
						scale: 1.5,
						offset: 1,
					},
				],
				{
					duration: animationDuration,
					easing: "ease-in-out",
				}
			);
			counter++;
		}
	}, slideDuration);
}

function init() {
	imageElement.src = images[counter];
}
