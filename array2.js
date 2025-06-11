 let arr=[1,3,4,6,7,8,9]

 let check= arr.every((value)=>value>1)
 console.log(check)

 //.some

 let arr2=[2,3,4,-1,-4,7]
 let output = arr2.some((value)=>value<0)
 console.log(output)

 let arr3=[2,3,5,[2,4],[5,6],[7,8],9]
 //[2,3,5,2,4,5,6,7,8,9]
 let final =arr3.flat();
 console.log(final)
 
 //.join()
 let fname=["D","H","A","N","U"]
 let output2=fname.join("");
 console.log(output2)

 //indexof
 let names = ["Dhanu","Sunitha","Ramakrishna","Naveen","Manasa","Shiva","Radhika","Revanth"]
 console.log(names.indexOf("Sunitha"))

 //fill()

 let students=["Rehman","kaj","karthik","sai"];
 console.log(students.fill("Dhanu"))