// const userEmail = "abc@gmail.com"
// if(userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("Not getting email")
// }

// const userEmailone=""
// if(userEmailone){
//     console.log("got user email")
// }
// else{
//     console.log("Do not getting email")
// }

// const userEmailtwo = []
// if(userEmailtwo){
//     console.log("got user email")
// }
// else{
//     console.log("Not getting email")
//}

//falsy value = false,0,-0,BigInt On,"",null
//truthy value = "0","false"," ",[],{},function(){}

//to check userEmail = [] is empty
const userEmail = ""
if(userEmail.length===0){
    console.log("Array is empty");
}

//to check object is empty = {}
const emptyobject = {}
if(Object.keys(emptyobject).length===0){
    console.log("Object is empty");
}