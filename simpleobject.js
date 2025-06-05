 let person={
    firstName:"Dhanunjaya",//string
    age:10,//number
    isAlive:true,//boolean
 }
 console.log(person.age)
 console.log(person.firstName)
 console.log(person.isAlive)
 

 person.email ="Dhanujaya@149.in" //Add

 person.age=17 //Update

 delete person.firstName //delete

//  console.log(person);

 
//Now

let fruits=["Apple","Banana","Mango"]
//            0        1        2
console.log(fruits)
console.log(fruits[0]) //Apple


let cities=["Kurnool","Hyderabad","Vizag","Bengaluru"]
console.log(cities)
console.log(cities[2])

cities[2]="Punjab" //Updadting array elements
cities[4]= "Gujarat" //Add Element
console.log(cities[2])

delete cities[1] //Deletion

let Trophy=["ROYAL","CHALLENGERS","BENGALURU","WINNER2025"]
console.log(Trophy)
console.log(Trophy[3])


//for loop
for (let i=0; i<=10; i++){
    console.log(i)
}

//While
let i=1;
while(i<=10){
    console.log(i)
    i++;
}
//Do While
let j=0;
do{
    console.log(j)
    j++;
}while(j<=10);