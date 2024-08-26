// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let arr = [];
for (let i = 0; i < 10; i++) {
    let input;
        input = prompt(`Enter  ${i + 1} digit (0-9):`);
    if( isNaN(input) || input.length !== 1 || input < 0 || input > 9){
        console.log("Enter single digit only")
        i--
    }
    else{
         arr[i] = input;
    }
}
let res = "";
function str(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            res += "+91 (" + arr[i];
        } else if (i === 3) {
            res += ") " + arr[i];
        } else if (i === 6) {
            res += "-" + arr[i];
        } else {
            res += arr[i];
        }
    }
    console.log(res);
}
str(arr);
