const dc =["viart","rohit"]
const cr = ["superman","batman"]
// dc.push(cr)
//  console.log(dc);
//  console.log(dc[1][1]);

// const all = dc.concat(cr)
// console.log(dc);

const allnew = [...dc,...cr]
// console.log(allnew);
const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real = anotherarray.flat(Infinity)
console.log(real);

console.log(Array.isArray("riya"))
console.log(Array.from("ron"));
// console.log(Array.from({name:"ron"}));intersting
let score1 = 300
let score2 = 400
let score3 = 500
console.log(Array.of(score1,score2,score3));
