// let srr=["satya",'king','mannnnnnn','its', 'time','a','ab']
// let max=srr[0]
// for(i=1;i<srr.length;i++){
//     if(max.length<srr[i].length){
//         max=srr[i]
//     }
// }
// console.log(max)

function len(stt){
    cnt=0
    for(i=0;stt[i]!==undefined;i++){
     cnt++
    }
    return cnt
 }
// let srr=["satya",'king','mannnnnnn','its', 'time','a','ab','cc','bb'] //7
let srr=[5,8,5,4,7,66,1,2,0,88]
console.log(srr)
    s=0
   while(s<len(srr)){
    for(let i=0;i<len(srr)-1;i++){
        if((srr[i])>((srr[i+1]))){
            a=srr[i]       //c=a
            srr[i]=srr[i+1]      // a=b
            srr[i+1]=a           //b=c
        }
    }
    s++
   }
console.log(srr)

