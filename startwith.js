// 1.Write a function to filter an array of strings to include only strings that start with a specified character.

// Example: ["hello", "world", "this", "is", "a", "test"], "h" -> ["hello"]

let arr=["hello", "world", "his", "is", "a", "test"];
const arr1=[];
let res=my_fun(arr,"h")
function my_fun(arr,str){
    for(i=0;i<arr.length;i++){
        if(arr[i].startsWith(str)){
            arr1.push(arr[i])
        }
    }
}
console.log(arr1)


let y=fun(arr,"o")
console.log(y)
function fun(ar,st){
    return ar.filter(item => item.endsWith(st))
}

