const date = new Date
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString())
// console.log(date.toJSON())

// console.log(typeof date);
// let myDate = new Date(2023, 0, 23)
// let myDate = new Date(2023, 0, 23 ,5 ,3)
// let myDate = new Date("2023-01-13") //YY-MM-DD
let newDate = new Date("01-13-2023") //MM-DD-YY
// console.log(`${myDate.toLocaleString()} , ${newDate.toLocaleString()}`)

let TimeStamp = Date.now()
// console.log(TimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let mydate = new Date
console.log(mydate);
// console.log(mydate.getDay()); //day starts from Monday[1] , tuesday[2] , wedenesday and so on
// console.log(mydate.getMonth()); //month start from 0
// console.log(mydate.getMonth()+1); // to avoid confusion of user

mydate.toLocaleString('default',{
    dayPeriod:"long", //ctrl+space
    weekday:"long"
})

