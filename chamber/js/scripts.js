function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Grabs the date from the DOM
const datefield = document.querySelector(".date");

//Finds system date from the computer
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
 	now
 );

 //Creates date on the DOM
datefield.innerHTML = `<em>${fulldate}</em>`;

const todaysdate = new Date();
const month = todaysdate.getMonth()+1;
const day = todaysdate.getDate();
const year = todaysdate.getFullYear();
const hour = todaysdate.getHours();
const minutes = todaysdate.getMinutes();
const seconds = todaysdate.getSeconds();

const date = new Date(document.lastModified);
const currentDate = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
document.getElementById("currentDate").innerHTML = currentDate;

// banner js code
document.querySelector(".bannerClose").addEventListener("click", function(){
    this.closest(".banner").style.display = "none"
});

let bannerDay = new Date();

//Need to fix code below to display on Monday or Tuesday only
// const banner = document.getElementsByClassName(".banner");
// if(banner.getDay() == 1 || (banner.getDay() == 2) {
//     banner.style.display = "block";
// }else{
//     banner.style.display = "none"
// }

