// 13. Create a function that takes an array of numbers and returns the second largest
// number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40
let arr=[10,8,5,45,16,43]

function maxx(arr){
    j=0
    while(j<arr.length){
       for(i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp     
        }
       }
        j++
    }
}
maxx(arr)
console.log(arr[arr.length-2])

// y=Math.max(...arr)
console.log(Math.max(...arr))