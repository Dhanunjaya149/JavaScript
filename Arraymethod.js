
 let fruits=["Apple","Banana","Orange"]
 //  index      0        1       2 
 console.log(fruits)
 //   .push
 fruits.push("Dragon")
 fruits.push("Water Melon")
 console.log(fruits)

 fruits.unshift("Dhanunjaya")
 console.log(fruits)

// Unshift adds at first 
// push adds last

fruits.shift() //removes element from first
fruits.pop() //removes element from last
console.log(fruits)

//.map() and forEach()

let numbers = ["10","20","30","40"];
numbers.forEach((value)=>{
    console.log(value)
})
//forEach method used to print all the elements in the array
//forEach does not return value
let num1=[3,4,5];
// .find() ==> Returns the match based on condition
let output = num1.find((value)=>{
    console.log(value>4)
})


let arr =["Dhanu","Sunitha","Ramakrishna","Nani"]
let check = arr.includes("Dhanu") //true
console.log(check)

let arr1=[3,6,4,8,9,2,1]
// to sort the array
// console.log(arr1.sort())
console.log(arr1.reverse())
let num2 =[6,3,7,8,4,55,63,24,67,34,56,98]
console.log(num2.sort((a,b)=>a-b))