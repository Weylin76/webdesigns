// select weather information from index and fetch API
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=37.08&lon=-88.60&units=imperial&APPID=5d177bfcfd97660efa8f1485d0796cd6`
const conditionsCurrently = document.querySelector('.current-weather');
const weatherNotify = document.querySelector('#weather-notify')
const weatherAlert = document.querySelector('#weather-alert');
const dayOne = document.querySelector('.day1')
const dayTwo= document.querySelector('.day2')
const dayThree = document.querySelector('.day3')
const threeDay = document.querySelector('.multipleDay');


fetch(weatherUrl)
  .then((data) => data.json())
  .then((results) => {

    const alerts = results['alerts'];

    // Determine if there is a weather alert in API file
    if (alerts !== undefined) {
      // Adds button to weather alert button
      const closeAlert = document.createElement('button');
      closeAlert.textContent = `alert: ${results.current.event}`;
      console.log(alerts);
      weatherNotify.appendChild(closeAlert);
      // button changes display to "none";
      closeAlert.addEventListener('click', () => {weatherNotify.classList.add('remove-notify')}, true)
    }
    // Display any alerts 
    if (alerts > 0) {
      alerts.forEach(displayAlerts);
      
    }

      function displayAlerts(alerts) {
    // A function to dsiplay weather alrets and warnings. 
    //Ccreate a p element for each alert and append it to the weatherAlert div
    let event = document.createElement('p');
    let alert = alerts.event;
    event.innerText = alert
    weatherAlert.appendChild(event)
  }

    // Elements for weather
    // Current Weather
    const iconCurrent = document.createElement('img');
    const tempCurrent = document.createElement('p');
    const humidityCurrent = document.createElement('p');
    const descriptionCurrent = document.createElement('p');
    const current = document.createElement('div');
    // Day one weather
    const iconDayOne = document.createElement('img');
    const tempDayOne = document.createElement('p');
    const descriptionDayOne = document.createElement('p');
    const forecastOne = document.createElement('div');
    // Day two weather
    const iconDayTwo = document.createElement('img');
    const tempDayTwo = document.createElement('p');
    const descriptionDayTwo = document.createElement('p');
    const forecastTwo = document.createElement('div');
    // Day three weather
    const iconDayThree = document.createElement('img');
    const tempDayThree = document.createElement('p');
    const descriptionDayThree = document.createElement('p');
    const forecastThree = document.createElement('div');
    
    // Set variables to current weather values.
    const currentTemp = results.current.temp;
    const currentDescription = results.current.weather[0].description;
    const currentWeatherIcon = `https://openweathermap.org/img/w/${results.current.weather[0].icon}.png`;
    const currentHumidity = results.current.humidity;
    const degree = String.fromCodePoint(0x00B0);
   
    // Set variables to three day forecast values
    // First Day
    const firstDayTemp = results.daily[0].temp.max;
    const firstDayIcon = `https://openweathermap.org/img/w/${results.daily[0].weather[0].icon}.png`;
    const firstDayDescript = results.daily[0].weather[0].description;
    // Second Day
    const secondDayTemp = results.daily[1].temp.max;
    const secondDayIcon = `https://openweathermap.org/img/w/${results.daily[1].weather[0].icon}.png`;
    const secondDayDescript = results.daily[1].weather[0].description;
    // Third Day
    const thirdDayTemp = results.daily[2].temp.max;
    const thirdDayIcon = `https://openweathermap.org/img/w/${results.daily[2].weather[0].icon}.png`;
    const thirdDayDescript = results.daily[2].weather[0].description;

    
    // Add the image and p elements for current weather
    current.appendChild(iconCurrent);
    current.appendChild(tempCurrent);
    conditionsCurrently.appendChild(current);
    conditionsCurrently.appendChild(descriptionCurrent);
    conditionsCurrently.appendChild(humidityCurrent);

    // Set html elements to the values
    tempCurrent.textContent = `${currentTemp.toFixed(0)}${degree}`;
    iconCurrent.setAttribute('src', currentWeatherIcon);
    iconCurrent.setAttribute('alt', currentDescription);
    descriptionCurrent.textContent = currentDescription;
    humidityCurrent.innerHTML = `${currentHumidity}% humidity`;

    // Add the image and p elements for three day forecast weather
    // Day one
    forecastOne.appendChild(iconDayOne);
    forecastOne.appendChild(tempDayOne);
    day1.appendChild(forecastOne);
    day1.appendChild(descriptionDayOne);

    // add classes for styling
    forecastOne.classList.add('forcast');

    tempDayOne.textContent = `${firstDayTemp.toFixed(0)}${degree}`;
    iconDayOne.setAttribute('src', firstDayIcon);
    iconDayOne.setAttribute('alt', firstDayDescript);
    descriptionDayOne.textContent = firstDayDescript;

    // Day two
    forecastTwo.appendChild(iconDayTwo);
    forecastTwo.appendChild(tempDayTwo);
    day2.appendChild(forecastTwo);
    day2.appendChild(descriptionDayTwo);

    tempDayTwo.textContent = `${secondDayTemp.toFixed(0)}${degree}`;
    iconDayTwo.setAttribute('src', secondDayIcon);
    iconDayTwo.setAttribute('alt', secondDayDescript);
    descriptionDayTwo.textContent = secondDayDescript;

    // Day three
    forecastThree.appendChild(iconDayThree);
    forecastThree.appendChild(tempDayThree);
    day3.appendChild(forecastThree);
    day3.appendChild(descriptionDayThree);

    tempDayThree.textContent = `${thirdDayTemp.toFixed(0)}${degree}`;
    iconDayThree.setAttribute('src', thirdDayIcon);
    iconDayThree.setAttribute('alt', thirdDayDescript);
    descriptionDayThree.textContent = thirdDayDescript;

    // add classes for styling
    forecastOne.classList.add('forcast');
    forecastTwo.classList.add('forcast');
    forecastThree.classList.add('forcast');
    current.classList.add('forcast');
  });


