let h1 = document.getElementsByTagName('h1')[0];
console.log (h1)

let p = document.getElementsByTagName('p');
p[3].remove();

let h2 = document.getElementsByTagName('h2')[0];

h2.addEventListener('click', function(){
  h2.style.backgroundColor='red'
})

let h3 = document.getElementsByTagName('h3')[0];

h3.addEventListener('click', function() {
  h3.style.display = "none";
})

function maketextbold(){
    document.getElementsByTagName("p")
    let paragraphs = document.getElementsByTagName("p")
    let u = paragraphs.length

    for (let i = 0 ; i < u; i++){

    paragraphs[i].style.fontWeight="900"

    } 

}
