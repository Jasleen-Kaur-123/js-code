//2 Types to define objects -> 1)singleton 2)Literals
//singleton
//object.create  It is make through constructor method

//object Literal
const jsUser = {
    name:"Jasleen Kaur",
    age:22,
    location:"Delhi",
    email:"kaur@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Sunday"]
}
// console.log(jsUser)
// console.log(jsUser.location)
// console.log(jsUser["location"])

const sym = Symbol("key1")
const jsUser1 = {
         [sym]:"key1"
}
// console.log(typeof jsUser1[sym])
// console.log(jsUser1[sym])
// console.log(jsUser1.sym) //why this is given undefined rather than key1
jsUser.email = "newkaur@gmail.com"
// console.log(jsUser.email)

// Object.freeze(jsUser)
jsUser.email = "jasleen@gmail.com"
// console.log(jsUser.email) 
// console.log(jsUser)

//add function in objects
jsUser.greeting = function() {
    console.log("Hello World")
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello geeting to you ${jsUser.name}`)
}
console.log(jsUser.greetingTwo())