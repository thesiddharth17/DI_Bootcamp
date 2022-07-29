//Exercise 1
/*
function infoAboutMe(){
    let name = "Jayesh"
    let age  = 24
    let hobbies = "travelling"
    console.log("My name is " + name + " my age is " + age + " and my hobbies is " + hobbies)
    
}

infoAboutMe()





function infoAboutPerson(personName, personAge, personFavoriteColor){

  console.log("Your name is " + personName + " you are " + personAge + " years old and your favorite color is  " + personFavoriteColor)
  
  
}


infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")





//Exercise 2
function calculateTip(){
    let bill =Number(prompt("Send me the bill", 0))
       
       if (bill<50){
           return ("Your final bill is "  + (bill +(0.2*bill)))
       }
       else if( bill>= 50 && bill<=200){
           return ("Your final bill is "  +(bill +(0.15*bill)))
       }	
       else if(bill > 200){
           return ("Your final bill is "  + (bill +(0.1*bill)))
       }
   }
  console.log(calculateTip())


  isDivisible(3)
    isDivisible(45)


  


  //Exercise 3

  function isDivisible(divisor){
    let arr = []
    let sum = 0
    for ( let i =0; i <=500; i++){
      if ( i% divisor ===0 ){
        arr.push(i)
        sum = sum + i}
    }
    
    console.log("The numbers that are divisible by " + divisor+" are: "+ arr)
    console.log("The sum is: " + sum)
  }
    
  
    
    isDivisible(23)
    isDivisible(45)  
  





//Exercise 4


let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10

}

let shoppingList = ["banana", "orange", "apple"]
   
function myBill(){
   if (shoppingList in stock){
       return "The price of your item is" + prices


   }

   else{

        return"Sorry we don't have it"
   }


}
console.log(myBill("banana"))


*/


//Exercise 4












































