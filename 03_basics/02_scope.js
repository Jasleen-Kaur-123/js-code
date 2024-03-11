// let b = 55
const c = 90
// var a = 40
if(true){
    var a = 10
    let b = 20
    const c = 30
    // console.log("INNER : ",c)
}
// console.log(a)
// console.log(b)
// console.log(c)

//Nested Scope
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website) //it will show error
    // two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website) will show error
}
// console.log(username) //will show error
function addOne(num){
    return num+1
}
addOne(7)
const addTwo = function(num){
    return num+2
}
addTwo(5)