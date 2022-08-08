/*

//Class Exercise 1
  

for (let i = 0; i < 15; i++) {
    console.log(i);

    if (i%2 ==0){
        console.log(i,"is even")
      }
        else{
        console.log(i,"is odd")
        }


}   

*/


//Exercise 2 
   
let names= ["john", "sarah", 23, "Rudolf",34]
for (let i in names){
console.log ("Value of I + I "+ i) 

     let a = typeof(names[i])
     if (a != "string"){
    
         continue
     }

         console.log (names[i])

     
        // return names.charAt(0).toUpperCase() + String.slice(1);
       //  console.log(names[i])



} 





