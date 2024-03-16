//map
const num = [1,2,3,4,5,6,7,8,9,10]

// const newnum = num.map( (num) => { return num+10})
// console.log(newnum);
const newnum =
num.map((n)=>{return n*10})
.map((n)=>{return n+1}).filter((n)=>{return n>50})
console.log(newnum)