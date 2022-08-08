//Exercise XP 1
/*
let people = ["Greg", "Mary", "Devon", "James"];
    people.shift();                 //removes "Greg"
    console.log(people);            

    people[2] = "Jason";            //Replaces name
    console.log(people);

    people.push("Jayesh");         //Adds a name at the end
    console.log(people);

    console.log(people.indexOf("Mary"));
    console.log(people.slice(1,3));

    console.log(people.indexOf("Foo"));

    people.push("last");
    console.log(people.indexOf("last"));
     
    
    for (let i in people) {
       

        console.log (people[i]);

    }
    

    
    



    


//Exercise 2 : Your Favorite Colors
let colors = ["Red","Blue","Green","Orange","Black"];
let sup = ["st","nd","rd","th","th"];
  for (let i =0 ; i < colors.length ; i++){
   console.log("My " + (i+1)+ sup[i] +" color is: " +colors[i])}


   

//Exercise 3 : Repeat The Question
 
let b = 0;
  while (b<10) {

  let a = prompt("Please enter a Number:")
      b = Number(a);
 console.log("entered number is less than 10")

            }


*/

​
//Exercise 4 : Building Management
    let building = {
 numberOfFloors : 4,
 numberOfAptByFloor : {
     firstFloor : 3,
     secondFloor : 4,
     thirdFloor : 9,
     fourthFloor : 2,
             },
 nameOfTenants : ["Sarah", "Dan", "David"],
 numberOfRoomsAndRent:{
     sarah: [3, 990],
     dan :  [4, 1000],
     david : [1, 500],
                       },
                       }
   console.log("There are " + building.numberOfFloors +" floors")
   console.log("There are " + building.numberOfAptByFloor.firstFloor + " Apt on the first floor")
   console.log("There are " + building.numberOfAptByFloor.thirdFloor + " Apt on the third floor")
   console.log(building.nameOfTenants[1])
   console.log("The second tenant is " + building.nameOfTenants[1]  + " and has " + building.numberOfRoomsAndRent.dan[0] +" in his appartment")
​
     //console.log(building.numberOfRoomsAndRent.sarah[1])
     //console.log(building.numberOfRoomsAndRent.david[1])
     //console.log(building.numberOfRoomsAndRent.dan[1])
​
     let a = building.numberOfRoomsAndRent.sarah[1]
     let b = building.numberOfRoomsAndRent.david[1]
     let c = a + b
     let d = building.numberOfRoomsAndRent.dan[1]
​
    // console.log(a)  checking if variable has been properly assigning 
     //console.log(b)
    // console.log(d)
       console.log("The sum of Sara and David is: " + c)
​
          if (c< d){
           d= d+200 ;}
     console.log("The new rent for dan is: " + d)
     building.numberOfRoomsAndRent.dan[1] = d 
     console.log("details of dan: "+ building.numberOfRoomsAndRent.dan ) 


          /*​


//Exercise 5 : Family
​
     let family = {
         Surname:"Smith",
         FirstName: "John",
         Address: "Avenue Wallstreet",
         Village: "Flacq"};
     for (let x in family){
         console.log(x)}
​
     for (let r in family){
         console.log(family[r])} 
​

/*
//Exercise 6
​
 let details = {
   my: 'name',
   is: 'Rudolf',
   the: 'raindeer'
                 }
 let str = " "
  for ( i in details){
​
   str = str + i+ " " + details[i]+ " " 
     }
     console.log(str)

*/

//Exercise 7 : Secret Group
  let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];  
  let firstletter = []

  for(name of names){
    //pushing in array only the first character of the names
    firstletter.push(name.charAt(0))


    
    firstletter = firstletter.sort()



    firstletter = firstletter.join("")

    console.log(firstletter)



  }
  console.log(names)


