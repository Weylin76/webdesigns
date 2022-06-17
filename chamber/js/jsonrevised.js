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
    console.log(businessList);
    businessList..forEach(business => { 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

    });
}

getbusinesses();