//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element)
// }

//to print table
// for(let i=1;i<=10;i++){
//     console.log(`Outer loop : ${i}`)
//     for(let j=1;j<=10;j++){
//         // console.log(`Inner loop : ${i} and ${j}`)
//            console.log(i+ " * " +j+ " = " +i*j )
//     }
// }

//print array
// let myArray = [1,201,354,866,5]
// for(let i=0;i<myArray.length;i++){
//     console.log(myArray[i])
// }

//break and continue
for(let i=1;i<=20;i++){
    if(i==5) {
        console.log("Detected 5")
        // break;
        continue;
    }
    console.log(`value of i is ${i}`)
}
