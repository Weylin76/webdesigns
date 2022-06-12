// capatures the last date the person visted the website
//Get today's date
const day = d.getDate();
const month = d.getMonth() +1;
const year = d.getFullYear();

//set the date feild to the current date
document.getElementById("date").value = `${month}/${day}/${year}`
