function demo(x){
    x();   // demo is higher order function
}
function demo1(){
    console.log(" ia am demo")
}
demo(demo1)  // demo1 is call back function

