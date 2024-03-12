// //if
// if(false){
//     console.log("hello")
// }
// if(true){
//     console.log("hello")
// }

//if , else
// const temp=400
// if(temp<50){
//     console.log("Hello")
// }
// else{
//     console.log("Null")
// }
// console.log("will execute")

//scope
// const score = 300
//     if(score>100){
//         let power = "fly"
//         console.log(`It will have ${power}`)
//     }
//     console.log(`It will have ${power}`)

//short hand notation
// const a = 400
// if(a<500) console.log("Yess"),console.log("Ohh yess")

//if else , else if
// const balance = 1000
// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

//Multiple condition check
const isLoggedin = true
const haveDebitCard = true
const isLoggedfromGoogle = false
const isLoggedfromFacebook = true
const userGuest = true
if(isLoggedin && haveDebitCard && 2!==2){
    console.log("Can have access to buy")
}

if(isLoggedfromFacebook || isLoggedfromGoogle || userGuest){
    console.log("have joy");
}