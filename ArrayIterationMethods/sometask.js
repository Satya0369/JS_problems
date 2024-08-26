// Some
// 1. Check if any number in an array is even: [1, 2, 3, 4, 5] → true
// 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true

let x=[1, 9, 3,5, 5] 
zz=x.some(a => a%2==0)
console.log(zz)

let y=["hello", "world", "max"] 
yy=y.some(a => a.includes("x"))
console.log(yy)