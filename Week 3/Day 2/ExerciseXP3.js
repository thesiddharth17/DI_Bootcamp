'use strict'
let strong = document.querySelectorAll('strong');

let allBoldItems; 

function getBold_items() {
  allBoldItems = [];
  strong.forEach(e => allBoldItems.push(e.textContent));
}

getBold_items();

console.log(allBoldItems);


const highlight = function() {
 strong.forEach(e => e.style.color = 'blue')
}

const return_normal = function() {
 strong.forEach(e => e.style.color = 'black')
}

let p = document.querySelector('p');

p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', return_normal)