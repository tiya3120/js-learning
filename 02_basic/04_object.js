// const iguser = new Object()
const iguser = {}
iguser.id="123abc"
iguser.name="jiya"
iguser.isloggedin=false
// console.log(iguser);
const reguser = {
    email:"some@gmail.com",
    name:{
        fullname:{
            first:"riya",
            last:"rathod"
        }
    }
}
// console.log(reguser.name.fullname.first);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"r",4:"t"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    }
]
user[1].email
// console.log(iguser);
// console.log(Object.keys(iguser));
// console.log(Object.values(iguser));
// console.log(Object.entries(iguser));
// console.log(iguser.hasOwnProperty('islogged'));


const crs ={
    crsn:"js",
    price:"999",
    crsin:"r"
}
// crs.crsin
const {crsin}=crs
console.log(crsin);

// {
//     'name":"ron",
//     "crsn":"account",
    
// }
[
    {},
    {},
    {}
]