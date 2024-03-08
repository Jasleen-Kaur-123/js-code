const tinderUser = new Object() //It is a singleton Object
const tinder = {} //It is non singleton object
    tinder.id=123
    tinder.name="kaurdhillon"
    tinder.isLoggedIn=false
// console.log(tinder)

//Object ka andar object
const regularUser = {
    email : "abc@gmail.com",
    fullname : {
            username : {
                firstname : "Jasleen",
                lastname : "Kaur"
            }
    }
}
// console.log(regularUser.fullname.username.firstname)

const obj1 = {1 : 'a' , 2 : 'b'}
const obj2 = {3 : 'a' , 4 : 'b'}
const obj3 = {5 : 'a' , 6 : 'b'}

// const obj4 = {obj1,obj2} output -> object kai andar object same promblem as array showes
// const obj4 = Object.assign({},obj1,obj2,obj3)
// const obj4new = Object.assign(obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)
// console.log(obj4new);

const user = [
    {
        id:1,
        email:"Kaur@gmail.com"
    },
    {
        id:2,
        email:"jass@gmail.com"
    },
    {
        id:1,
        email:"Kaur@gmail.com"
    },
    {
        id:2,
        email:"jass@gmail.com"
    },
    {

    },
    {

    },
    {

    }
]
// console.log(user[1].email) //starts from 0
console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty('tinder')) //hasOwnProperty-> to check whether property/key exsist or not
console.log(tinder.hasOwnProperty('isLoggedIn'))
