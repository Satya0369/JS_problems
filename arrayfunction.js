let arr1=[5,8,7,9]
let arr2=[2,8,704,99,100]
let arr3=[15,78,990,500]
const arr4=[]
let max;
arr4[0]=maxx(arr1)
arr4[1]=maxx(arr2)
arr4[2]=maxx(arr3)
console.log(arr4)
function maxx(a1){
    max=a1[0];
    for(i=0;i<a1.length;i++){
        if(a1[i]>max){
            max=a1[i]
        }
    }
    return max
}