let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let ul = document.getElementsByClassName('usersAnswer')[0];

let btn = document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
  let fNameValue = fName.value;
  let lNameValue = lName.value;
  if (fNameValue === '' || lNameValue === '') {
    alert('Write Something!');
  } else {
    let li = document.createElement('li');
    let liText = document.createTextNode(fNameValue);
    let li2 = document.createElement('li');
    let liText2 = document.createTextNode(lNameValue);
    li.appendChild(liText);
    li2.appendChild(liText2);
    ul.appendChild(li);
    ul.appendChild(li2);
  }
})

