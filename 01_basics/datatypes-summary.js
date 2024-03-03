//primitive
//7 types => string,number,boolean,null,undefined,symbol,bigInt

let string = "hello"
let age = 123
let isLoggedIn= false
let measureTemp = null
let state;
const id=Symbol('123')
const anotherId=Symbol('123')
// console.log((id===anotherId))
// let bigNumber=12355962556369823n
// console.log(typeof bigNumber)

//Reference (Non-primitive)
//3 types => Array,Objects,Functions

let cars = ["Jaguar","BMW","Echo","Maruti","Tesla","Ferrari","Mahindra Thar"]
let myObject={
    name:"Jasleen kaur",
    age:22,
}
const myFunction=function(){
    console.log("Hello world")
}

//****************************************************************
let myYoutubename = "JasleenKaur"
let anothername =  myYoutubename
anothername = "kaurdhillon"
// console.log(myYoutubename)
// console.log(anothername);

let userOne ={
    gmail:"google@gmail.com",
    userId:"1234"
}
let userTwo = userOne
userTwo.gmail = "book@gmail.com"
console.log(userOne.gmail);
console.log(userTwo.gmail);