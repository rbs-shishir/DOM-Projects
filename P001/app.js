// Project details:
// Change the background color of the webpage using RGB color code by clicking a button

// Calling onload function
window.onload = () => {
	main();
};

// Calling all the necessary elements and add the event listener and combine them in a function for calling
function main() {
	const root = document.getElementById("root");
	const btn = document.getElementById("clr_chng");

	btn.addEventListener("click", function () {
		const bgColor = generateRGBColor();
		root.style.backgroundColor = bgColor;
	});
}

// Generate the RGB color code
function generateRGBColor() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}
