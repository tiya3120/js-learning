// singleton
// object literals
 const mysym = Symbol("key1")

const jsuser = {
    name:"riya",
    "full name":"rathod riya",
    [mysym]:"mykey1",
    age:23,
    location:"surat",
    email:"ron31@google.com",
    isloggedin:false,
    lastloginday:["mon","thu"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email="ron20@123.com"
// Object.freeze(jsuser)
jsuser.email="ron3120@gfg.com"
// console.log(jsuser);

jsuser.greeting =function(){
    console.log("myy sweet boyy");
    
}
jsuser.greeting2 =function(){
    console.log(`myy sweet boyy,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
