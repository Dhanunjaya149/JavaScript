//for...of - Used to loop over the values of an array:
//for...in - Used to loop over the keys(indexes) of an array and an object

let fruits=["Apple","Banana","Orange"]
for(let x of fruits){
    console.log(x)
}

//for in loop is used in mainly for objects
// rare in loops

let person={
    fname:"Dhanunjaya",
    age:21,
    city:"KNL"
}
for(let key in person){
    console.log(key,person[key])
}
