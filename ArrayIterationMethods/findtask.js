// Find
// 1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2
// 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"

x=[1, 2, 3, 4, 5]
xx=x.find(a => a%2==0)
console.log(xx)


let y=["hello", "world", "max"] 
yy=y.find(a => a.includes("x"))
console.log(yy)