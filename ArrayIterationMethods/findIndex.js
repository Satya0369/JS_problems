// FindIndex
// 1. Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1
// 2. Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2


x=[1, 2, 3, 4, 5]
xx=x.findIndex(a => a%2==0)
console.log(xx)

let y=["hello", "world", "max"] 
yy=y.findIndex(a => a.includes("x"))
console.log(yy)