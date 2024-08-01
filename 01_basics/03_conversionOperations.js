let score="33abc"
// console.log(typeof score)
let scoreInNumber=Number(score)
// console.log(typeof(scoreInNumber))
// console.log(scoreInNumber)

//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN (not a number)

let isLoggedIn=0
let BooleanisLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanisLoggedIn)

//1=true , 0=false
//"" => false , 0 =>false , null=>false , undefined =>false
//"hello" => true
/**************************Operations ***************************/
let value=undefined  //""=>-0 ,null=>-0,undefined=>NaN
let negValue=-value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3) //2 the power 3=>8 (2*2*2->8)
// console.log(2%2)

// {JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.}
// console.log("1"+2 +3)
// console.log(1+ 2+ "4"); 

let gameChanger=100
++gameChanger
// console.log(gameChanger);

let num1, num2, num3
num1 = num2 = num3 = 2+2*2 //2+2+2->6
// console.log(num1)

let s1 = "good"
let s2 = " morning"
let s3 = s1 + s2
// console.log(s3);

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

let xnew = 3
const ynew = ++xnew
console.log(`x:${xnew}, y:${ynew}`)