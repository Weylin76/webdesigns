const url = 'https://weylin76.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.spotlight');
let num = 1;

async function getbusinesses(){
    let response = await fetch(url);
    if (response.ok) {
        let businessList = await response.json();
        buildcards(businessList);
    }else{
        throw Error(response.statusText);
    }
}
function buildcards(info) {
    let data = info.BusinessInformation.filter((p) => p.membershipLevel == "Gold" || p.membershipLevel == "Silver");
    for (let i = 0; i <= 5; i++) {
      data.splice(Math.floor(Math.random() * data.length), 1);
    };
    data.forEach((business) => {
        let card = document.createElement("div");
        let h4 = document.createElement("h4");
        let picture = document.createElement("picture");
        let img = document.createElement("img");
        let phone = document.createElement("p");
        let membership = document.createElement("p");

        card.setAttribute("class", `border spotlight`);
        card.setAttribute('id', `spot ${num}`);
        h4.innerHTML = `${business.name}`;
        img.setAttribute("src", `${business.image}`);
        img.setAttribute("alt", `${business.alt}`);
        phone.innerHTML = `${business.phone}`;
        membership.innerHTML = `Membership Level: ${business.membershipLevel}`;

        card.appendChild(h4);
        card.appendChild(picture);
        picture.appendChild(img);
        card.appendChild(phone);
        card.appendChild(membership);
        cards.append(card);

        num +=1;
    });
}
getbusinesses();
