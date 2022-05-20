const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    if (myItem == "")
    {return input.value}
    input.value = '';

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'X';
list.appendChild(listItem);

listBtn.addEventListener('click', () => {
    list.removeChild(listItem);   
})
})


// var sleepCheck = function (numHours)
//     {
//      if (number of sleep >= 8) 
//     {return "You're getting plenty of sleep! Maybe even too much!";}
//     else(number of sleep < 8)
//     {return "Get some more shut eye!";}
//     }
//     sleepCheck(10);