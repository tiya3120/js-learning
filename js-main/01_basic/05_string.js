const name = "riya"
const repocount = 31
// console.log(name + repocount +"value");

console.log(`hello my name is ${name} my repo count is ${repocount}`);


const gamename = new String('riyar-g')

// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(4));
// console.log(gamename.indexOf('y'));
const newstring = gamename.substring(0,2)
console.log(newstring);
const anotherstring = gamename.slice(-5,3)
console.log(anotherstring);

const newstring1 = "      riya    "
console.log(newstring1);
console.log(newstring1.trim());
const url = "https://riya.com/riya%31rathod"
console .log (url.replace('%31','_'))
console.log(url.includes('riya'))
console.log(gamename.split('_'));
