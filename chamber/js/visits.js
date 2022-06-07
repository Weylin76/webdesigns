// initialize display elements const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
let today = new Date();

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
// todayDisplay.textContent = Date.now()
const distance = parseInt(today) - parseInt(visitsDisplay)
document.querySelector(".distance").innerHTML = 
// document.querySelector(".wind-chill").innerHTML = "N/A" 
