// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

arr ="55884499661".split("").map(Number)
emp=[],dub='',uniq=''
for (i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
// console.log(emp)
for(i of emp){
    count=0;
    for(j of arr){
        if(i==j){
            count++
        }
    }
    if(count==1){
        uniq=uniq+i
    }
    else{
        dub=dub+i
    }
}
if(uniq.length>1){
    uniq=uniq.split("").join(",")
    console.log("Unique numbers are: "+uniq)
}
else{
    uniq=uniq.split("").join(",")
    console.log("Unique number is: "+uniq)
}
if(dub.length>1){
    dub=dub.split("").join(",")
    console.log("Duplicate numbers are: "+dub)
}
else{
    dub=dub.split("").join(",")
    console.log("Duplicate number is: "+dub)
}

