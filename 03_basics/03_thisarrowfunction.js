const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to webiste`)
        console.log(this)
    }
}
// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()
//Defining function
function chai(){
    let user = "hitesh"
    // console.log(this)
    console.log(this.username)
}
// chai()

const  code = function(){
    let user = "hitesh"
    console.log(this.username)
}
// code()

const usercode = () => {
    let username = "hitesh"
    // console.log(this) //will show empty paranthesis
    console.log(this.username)
}
// usercode()

const addTwo = (num1,num2) =>{
    return num1+num2 //explicit return
}
// console.log(addTwo(2,3))

// const newaddTwo = (num1,num2) => num1+num2
//     console.log(addTwo(3,12));

const newaddTwo = (num1,num2) => (num1+num2)
    // console.log(addTwo(3,12));

//If returning object : Implicitly
const addThree = (num1,num2,num3) => ({username:"hitesh"})
// console.log(addThree())

//In Array 
// const a = [12,3,2,4,65,87]
// a.forEach(function (){}) 
// a.forEach(()=>{})

//Immediately invoked function expressions[IIFE]
(function aurcode(){
        console.log('DB CONNECTED')
})(); //It is  not working
( () => {
    console.log('DB CONNECTED TWO')
})();
( (name)=>{
    console.log(`DB CONNECTED ${name}`)
})("hitesh")
