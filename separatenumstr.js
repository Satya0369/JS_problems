let arr=["hello9",'it2s','me','satya','369','4414','3634','2425']
let arr1=[]
let arr2=[]
k=0
j=0
for(i=0;i<arr.length;i++){
    if((isNaN(arr[i]*2))){
        arr1[k]=arr[i]
        k++
    }
    else{
        arr2[j]=arr[i]
        j++
    }
}
console.log(arr1)
console.log(arr2)