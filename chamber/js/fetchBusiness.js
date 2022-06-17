const requestURL = 'https://weylin76.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['business'];
    businesses.forEach(displaybusinesses);
  });
  console.log(displaybusinesses)
 
  function displaybusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2')};
    // card.innerHTML = 
    // `<h2>Some heading ${business.name}</h2>
    // <img src= alt class="image"
    // `

  
    // Change the textContent property information about each business
    h2.textContent = `${business.name}`;
  
//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     portrait.setAttribute('src', business.imageurl);
//     portrait.setAttribute('alt', `Portait of ${business.name};
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
//  
   
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);