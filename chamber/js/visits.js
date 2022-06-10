// initialize display elements const todayDisplay = document.querySelector(".today");
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
let rightNow = new Date().getTime();
 
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

// 
// Calculate days since last visted the page
const lastVisited = parseInt(localStorage.getItem("visits-last"));
const distance = rightNow - lastVisited;
localStorage.setItem("visits-last", rightNow);
console.log(lastVisited);
const days = distance / 86400000;
console.log(days);
document.querySelector("#numDays").textContent = Math.floor(days);

