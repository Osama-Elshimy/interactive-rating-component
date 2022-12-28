const ratingContainer = document.querySelector(".rating-container");
const thankContainer = document.querySelector(".thank-container");

const form = document.querySelector(".form");
const ratingList = document.querySelector(".rating-list");
const ratingBtns = document.querySelectorAll(".rating-btn");
const selectedRate = document.querySelector(".selected-rate");

//////////////////////////////////////
// Event Listeners

// Select rating handler
//  1. Add event listener to common parent element
ratingList.addEventListener("click", function (e) {
	e.preventDefault();

	//  2. Determine what element originated the event
	const clicked = e.target.closest(".rating-btn");

	// Gaurd Clause - return if no button is clicked
	if (!clicked) return;
	// console.log(clicked);

	// Remove active class from all buttons
	ratingBtns.forEach(btn => btn.classList.remove("active"));

	// Add active class to clicked button
	clicked.classList.add("active");

	// Asign rate to clicked button value
	selectedRate.textContent = ` ${clicked.textContent}`;
});

// Submit form
form.addEventListener("submit", function (e) {
	e.preventDefault();

	// Make sure a rating is selected
	if (!selectedRate.textContent) {
		console.log(`You must Choose a rate!`);
		return;
	}

	console.log("Submitted");

	// Hide rating container
	ratingContainer.classList.add("hidden");

	// Display thank container
	thankContainer.classList.remove("hidden");
});
