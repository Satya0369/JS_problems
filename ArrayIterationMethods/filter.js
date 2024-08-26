// 2. Write a function to filter an array of strings to exclude strings that include a specified substring.

// Example: ["hello", "world", "this", "is", "a", "test"], "o" -> [ "this", "is", "a", "test"]
// let arr=["hello", "world", "this", "is", "a", "test"]
// let char="h"
// console.log(my_fun(arr,char))
// function my_fun(arr,char){
//     return arr.filter(item => !item.includes(char))
// }

// console.log(arr)
let arr=["hello", "world", "this", "is", "a", "test"]
let char="o"
function my_fun(arr,char){
    let arr1=[];
     for( i=0;i<arr.length;i++){
        if(!(arr[i].includes(char))){
            arr1.push(arr[i])
        }
     }
     console.log(arr1) 
 }
 my_fun(arr,char)
