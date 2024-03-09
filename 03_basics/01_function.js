function myName(){
    console.log("K")
    console.log("A")
    console.log("U")
    console.log("R")
}
// myName()

// function toAddTwoNumber(number1,number2,number3){
//     console.log(number1+number2+number3)
// }
// toAddTwoNumber(4, 7, "4")
// toAddTwoNumber("7" , 2 , 2)


function toAddTwoNumber(number1,number2){
        // let result = number1+number2
        // return result
        return number1+number2
}
const result=  toAddTwoNumber(4,4)
// console.log("Result : ", result)

function isLoggedIn(username = "sam"){
    if(!username){
        console.log("Please enter your name")
        return
    }
    return `${username} just LoggedIn`
}
// console.log(isLoggedIn("Kaur"))

// function addToCart(...number1){ //output=>[2,4,2,3]
function addToCart(val1,val2,...number1){ //output[2,3] as '2 is stored in val1' and '4 is stored in val2'
    return number1
}
// console.log(addToCart(2,4,2,3))

let user ={
    username : "Jasleen Kaur",
    age : 18
}
function correct(anyobject){
    console.log(`My name is ${anyobject.username} and age is ${anyobject.age}`)
}
// correct(user)
// correct({ //direct passing object
//     username : "Kaur",
//     age : 5
// })

let arr = [100,200,300,400]
function returnSecondVal(arr){
    return arr[1]
}
// console.log(returnSecondVal(arr))
// console.log(returnSecondVal([100,5,3,89,4])) //directly passing values like in object