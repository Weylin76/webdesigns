const URL = 'https://weylin76.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

async function getbusinesses(){
    let response = await fetch(URL);
    if (response.ok) {
        let businessList = await response.json();
        buildcards(businessList);
    }else{
        throw Error(response.statusText);
    }
}

function buildcards(businessList){
    businessList.BusinessInformation.forEach(business => { 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let city = document.createElement('p');
        let state = document.createElement('p');
        let zip = document.createElement('p');
        let phone = document.createElement('p');
        let img = document.createElement('img');
        let website = document.createElement('p');
        let membership = document.createElement('p');
        let link = document.createElement('a');

        h2.innerHTML = business.name;
        address.innerHTML = business.address;
        city.innerHTML = business.city;
        state.innerHTML = business.state;
        zip.innerHTML = business.zip;
        phone.innerHTML = business.phone;
        img.src = business.image;
        img.alt = business.alt;
        website.innerHTML = business.website;
        membership.innerHTML = business.membershipLevel
        link.innerHTML = business.website
        img.setAttribute("class","directory-images")
        card.setAttribute("class","directory-card")
        website.setAttribute("class","directory-website")
        link.setAttribute("class","directory-website")
        
        let linkText = document.createTextNode("my title text");
        link.appendChild(linkText);
        link.href = business.website;
        document.body.appendChild(link);

        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(city);
        card.appendChild(state);
        card.appendChild(zip);
        card.append(phone);
        card.appendChild(img);
        card.appendChild(link);
        card.appendChild(membership);

        document.querySelector('div.cards').appendChild(card);

    });
}

getbusinesses();

const listView = document.querySelector('.list-view');
const cardView = document.querySelector('.grid-view');

listView.addEventListener('click', () => {cards.classList.add('dir-list')}, true);
listView.addEventListener('click', () => {cards.classList.remove('dir-cards')}, true);

cardView.addEventListener('click', () => {cards.classList.add('dir-cards')}, true)
cardView.addEventListener('click', () => {cards.classList.remove('dir-list')}, true)