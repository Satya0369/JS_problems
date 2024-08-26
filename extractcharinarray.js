// 3. Write a function to extract the first character from each string in an array of strings.

// Example: ["hello", "world", "this", "is", "a", "test"] -> ["h", "w", "t", "i", "a", "t"]

let arr=["hello", "world", "this", "is", "a", "test"]
// my_fill(arr)
// function my_fill(arr){
//     let arr1=[]
//     for(i=0;i<arr.length;i++){
//         arr1.push(arr[i][0])
//     }
//     console.log(arr1)
// }

let k= arr.map( item => {return(item[0])})
console.log(k)