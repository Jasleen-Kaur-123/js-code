//filter
// const coding = ['js','ruby','java','python','cpp']
// const values = coding.forEach((items)=>{
//     // console.log(items)
//     return items
// })
// console.log(values)

// const Num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = Num.filter( (num) => num>4)
// console.log(newNum)

// const Num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = Num.filter( (num) => {
//          return num>4
// })
// console.log(newNum)

// const myNum=[]
// Num.forEach( (num) =>{
//     if(num>4){
//         console.log(num)
//         myNum.push(num)
//     }
// })
// console.log(myNum)

const myBook = [
    {title:"book1",genre:"History",edition:1999},
    {title:"book2",genre:"Non-fiction",edition:1988},
    {title:"book3",genre:"fiction",edition:2000},
    {title:"book4",genre:"Non-fiction",edition:2008},
    {title:"book5",genre:"History",edition:2015},
];
// const book = myBook.filter( (bk) => bk.genre==='History')
const book = myBook.filter( (bk) => 
{ return bk.edition>2000 && bk.title==='book4' }
)
console.log(book)