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
        let card = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let website = document.createElement('p');
        let membership = document.createElement('p');

        h2.innerHTML = business.name;
        p.innerHTML = business.address;
        img.src = business.image;
        img.alt = business.alt;
        website.innerHTML = business.website;
        membership.innerHTML = business.membershipLevel
        img.setAttribute("class","directory-images")
        card.setAttribute("class","directory-card")
        website.setAttribute("class","directory-website")

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(img);
        card.appendChild(website);
        card.appendChild(membership);

        document.querySelector('div.cards').appendChild(card);

    });
}

getbusinesses();