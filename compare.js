 //comparison Operator
 let a=10;
 let b="10";
 let c=20;

 //Equal(loose)
 console.log(a==b); //true->value is same,type is ignored

 //Not Equal(strict)
 console.log(a!=b); //false->value is same,but type is different

 //Not Equal(loose)
 console.log(a===b); //false->value is same,but type is different

 //Not Equal(loose)
 console.log(b==c); //false->value is same,but type is different

 //Not Equal(loose)
 console.log(b===c); //false->value is same,but type is different

 //Not Equal(loose)
 console.log(b!=c); //true->value is same,but type is different
 

//Logical Operators
//Used in conditions (if,while,etc.) to combine or invert boolean

let x = true;
let y= false;

//logical and 
console.log(x&&y); //false-> Bothe must be true

//7.Ternary operator

let age=20;

 if (age>18){
    console.log("you can drive")
 }else{
    console.log("you can't drive")
 }

 let age1=10
 let output=(age>=19)? "Adult":"Minor"
 console.log(output)

 