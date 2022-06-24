const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&units=imperial&APPID=5d177bfcfd97660efa8f1485d0796cd6`

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector('#current-temp').textContent = data.main.temp.toFixed(0);
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const weatherDescription = data.weather[0].description;
    document.querySelector('#icon').setAttribute('src', weatherIcon);
    document.querySelector('#icon').setAttribute('alt', weatherDescription);
    let revisedWeatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    document.querySelector('figcaption').textContent = revisedWeatherDescription;
  });
 
