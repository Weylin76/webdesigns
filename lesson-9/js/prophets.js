const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });
//   const prophets = jsonObject['prophets'];

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let orderplace = document.createElement('p');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');

    let order = '';

    if (prophet.order === 1){
        order = `${prophet.order}st`;
    } else if (prophet.order ===2){
        order = `${prophet.order}nd`;
    } else if(prophet.order ===3){
        order = `${prophet.order}rd`;
    } else {
       order = `${prophet.order}th`;
    }
  
    // Change the textContent property information about each Prophet
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    orderplace.textContent = `${order} Latter-day Saint Prophet`
    birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of birth: ${prophet.birthplace}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${order} Latter-Day Saint Prophet`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(orderplace);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
   
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

