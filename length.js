// let x="kinghbvhj"
// cnt=0
// for(i=0;x[i]!=undefined;i++){
//     cnt++
// }
// console.log(cnt)
let x=[10,5,2,70,5,2]
let maxx=x[0]
console.log(max(x));
function max(x){
    for(i=1;i<x.length;i++){
        if(maxx<x[i]){
            maxx=x[i]
        }
    }
    return maxx
   
}


