const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Laingsburg,us&units=imperial&APPID=5d177bfcfd97660efa8f1485d0796cd6`

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector('#temperature').textContent = data.main.temp.toFixed(0);
    let t = (document.querySelector('#temperature').textContent);
    document.querySelector('#wind-speed').textContent = data.wind.speed;
    let s = document.querySelector('#wind-speed').textContent;
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const weatherDescription = data.weather[0].description;
    document.querySelector('#weatherLogo').setAttribute('src', weatherIcon);
    document.querySelector('#weatherLogo').setAttribute('alt', weatherDescription);
    let revisedWeatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    // document.querySelector('figcaption').textContent = revisedWeatherDescription;
    if (t >= 50.0 || s < 3.0) {
        document.querySelector(".wind-chill").innerHTML = "N/A" 
    }
    else {
        let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
        document.querySelector(".wind-chill").innerHTML = Math.ceil(chillFactor)
    }
  });