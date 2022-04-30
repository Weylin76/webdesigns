// day names array
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// long month names arrary
const months =  [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayNames = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const month = todaysdate.getMonth()+1;
const day = todaysdate.getDay()
const year = todaysdate.getFullYear();
const hour = todaysdate.getHours();
const minutes = todaysdate.getMinutes();
const seconds = todaysdate.getSeconds();

const currentdate = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`

document.getElementById('current_date').textContent = currentdate;
