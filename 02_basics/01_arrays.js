const myArray = [0,1,2,3,4,5]
// console.log(`first : ${myArray} ,second : ${myArray[5]} ,length : ${myArray.length}`)
// myArray.push(56,90)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(5))
// // console.log(myArray.indexOf(5));

// const newArr = myArray.join()
// console.log(newArr)
// console.log(typeof newArr)
// console.log(myArray);

console.log("A ",myArray)
const myn1 = myArray.slice(1,3)
console.log(myn1)
const myn2 = myArray.splice(1,3)
console.log("B ",myArray)
console.log(myn2);