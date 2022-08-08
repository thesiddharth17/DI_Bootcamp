let div = document.getElementById('container');
let button = document.getElementById('clear');

let sum = 0;

function pHello() {
  if(sum < 5) {
    let p = document.createElement("p");
    p.innerText = "hello world";
    div.appendChild(p);
    sum++;
  } //creates 
}

let a = setInterval(pHello, 2000);


button.addEventListener("click", function() {
    clearInterval(a); 
});
