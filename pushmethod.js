let arr=["hello9",'it2s','me','satya','369','4414','3634','2425']


// my_fun(arr,'satya')
// function my_fun(ar,str){
//     ar[ar.length]=str;
// }
console.log(arr)

let x=my_pop(arr)
console.log(x)
let y=my_pop(arr)
console.log(y)
function my_pop(arr){
    // let ar1=[]
    // for(i=0;i<arr.length-1;i++){
    //     ar1[i]=arr[i]
    // }
    arr.length=arr.length-1
    return arr
}
// let y=my_pop(arr)
// console.log(y)