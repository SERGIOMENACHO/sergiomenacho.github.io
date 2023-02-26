// initialize display elements
const visitsDisplay = document.querySelector("#Visited");

// get the stored value in localStorage
let numberOfVisit = Number(window.localStorage.getItem("numberOfVisit"));

// determine if this is the first visit or display the number of visits.
if (numberOfVisit !== 0) {
	visitsDisplay.textContent = numberOfVisit;
} else {
	visitsDisplay.textContent = 'This is your first visit!';
}

console.log("I am right here")
// increment the number of visits.
numberOfVisit++;

// store the new number of visits value
localStorage.setItem("numberOfVisit", numberOfVisit);


