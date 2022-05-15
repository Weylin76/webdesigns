//Grabs the date from the DOM
const datefield = document.querySelector(".date");

//Finds system date from the computer
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
 	now
 );

 //Creates date on the DOM
datefield.innerHTML = `<em>${fulldate}</em>`;