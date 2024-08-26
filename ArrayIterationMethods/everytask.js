// Every
// 1. Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true
// 2. Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false

let x=[1, 2, 3, 4, 5] 
zz=x.every(a => a>0)
console.log(zz)

let y=["hello", "world", "abc"] 
yy=y.every(a => a.length>5)
console.log(yy)