

let srr=["satya",'king','mannnnnnn','its', 'time','a','ab'] //7


function len(stt){
    let cnt=0
    for(let i=0;stt[i]!=undefined;i++){
     cnt++
    }
    return cnt
 }

console.log(srr)
    s=0
   while(s<len(srr)){
    for(i=0;i<(len(srr)-1);i++){
        if(len(srr[i])>(len(srr[i+1]))){
            a=srr[i]       //c=a
            srr[i]=srr[i+1]      // a=b
            srr[i+1]=a           //b=c
        }
    }
    s++
   }
console.log(srr)