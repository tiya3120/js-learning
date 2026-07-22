// primitive
// 7 types:string,number,boolean,null,undefined,symbol,bigInt



const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsidetemp = null
let useremail;
const id = Symbol("31")
const anotherid = Symbol("31")
console.log(id === anotherid);

// const bignumber = 473467347438467767n

// refrences (non primitive)
// array,objects,functions

const heros = ["virat","rohit","chiku"];
let myob = {
    name:"riya",
    age:19,
}
const myfunction = function() {
    console.log("hello sweetie");
}
console.log(typeof outsidetemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3
