const templeurl = 'json/temples.json';
const cards = document.querySelector('.cards');

async function gettemples(){
    let response = await fetch(templeurl);
    if (response.ok) {
        let templeList = await response.json();
        console.log(templeurl);
        buildcards(templeList);
        console.log(templeurl);
    }else{
        throw Error(response.statusText);
    }
}
gettemples();
function buildcards(templeList){
    templeList.templeInformation.forEach(temple => { 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('div');
        let city = document.createElement('div');
        let state = document.createElement('div');
        let zip = document.createElement('div');
        let phone = document.createElement('div');
        let clothing = document.createElement('div');
        let housing = document.createElement('div');
        let distribution = document.createElement('div');
        let announced = document.createElement('div');
        let groundbreaking = document.createElement('div');
        let dedicated = document.createElement('div');
        let image = document.createElement('img');

        h2.innerHTML = temple.name;
        address.innerHTML = `Address: ${temple.address} ${temple.city}, ${temple.state} ${temple.zip}`;
        phone.innerHTML = `Phone: ${temple.phone}`;
        clothing.innerHTML = `Clothing information: ${temple.clothing}`;
        housing.innerHTML = `Housing information: ${temple.housing}`;
        distribution.innerHTML = `Distribution information: ${temple.distribution}`;
        announced.innerHTML = `Date announced: ${temple.announced}`;
        groundbreaking.innerHTML = `Date of groundbreaking: ${temple.groundbreaking}`;
        dedicated.innerHTML = `Date dedicated: ${temple.dedicated}`;

        image.src = temple.image;
        image.alt = temple.alt;
        image.setAttribute("class","directory-images");
        card.setAttribute("class","directory-card");
        city.setAttribute("class","directory-address");
        state.setAttribute("class","directory-address");
        zip.setAttribute("class","directory-address");
        clothing.setAttribute("class","directory-info");
        housing.setAttribute("class","directory-info");
        distribution.setAttribute("class","directory-info");
        announced.setAttribute("class","directory-info");
        groundbreaking.setAttribute("class","directory-info");
        dedicated.setAttribute("class","directory-info");

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(city);
        card.appendChild(state);
        card.appendChild(zip);
        card.appendChild(phone);
        card.appendChild(clothing);
        card.appendChild(housing);
        card.appendChild(distribution);
        card.appendChild(announced);
        card.appendChild(groundbreaking);
        card.appendChild(dedicated);
       

        document.querySelector('div.cards').appendChild(card);
    })}