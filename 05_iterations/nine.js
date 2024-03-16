// reduce
// const num = [1,2,3]
//first way to solve this with arrow
// const newnum = num.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)

//first way to solve this with arrow
// const newnum = num.reduce( (acc,currval)=> acc+currval ,0)
// console.log(newnum)

const shoppingCart =[
    {
        name:"java",
        price:8000
    },
    {
        name:"js",
        price:7000
    },
    {
        name:"py",
        price:4000
    },
    {
        name:"dsa",
        price:10000
    },
]

const sumShoppingCart = shoppingCart.reduce( (acc,value) => acc + value.price,0)
console.log(sumShoppingCart);