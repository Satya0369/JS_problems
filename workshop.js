// 1. Uppercase
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase.
//     - Hints: Use the toUpperCase() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc", "def"]
//     - Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]
let str1=["hello", "world", "abc"]
console.log(`To Uppercase:`)
my_upper(str1)
function my_upper(str1){
    let resstr=str1.map( a => a.toUpperCase())
    console.log(resstr)
}






// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.
//     - Hints: Use the substring() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abcdef"]
//     - Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]

let str2=["hello", "world", "abc"]

console.log("First 3 letters: ")
my_substr(str2)
function my_substr(str2){
    let resstr2=str2.map(a => a.substring(0,3))
    console.log(resstr2)
}


// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "foo", "bar"]
//     - Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz", "f00", "bar"]

let y=["hello", "world", "abc","ooo"]
console.log("occurrences of o replaced with 0")
my_fun(y)

function my_fun(y){
    kk=y.map(a => a.replaceAll("o",0))
    console.log(kk)
}


// 4. Split
//     - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
//     - Hints: Use the split() method.
//     - Input Test Cases: ["hello-world", "abc-def"], ["xyz-abc-def"]
//     - Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]

let xx= ["hello-world", "abc-def"]
let yy=["xyz-abc-def"]
let _stt=my_split(xx)
let _stt1=my_split(yy)
console.log("Splitting of an array:")
console.log(_stt)
console.log(_stt1)
function my_split(x){
    let res=x.map( a => a.split("-"))
    res=res.flat(res.length)
    return res
}


// 5. Filter
//     - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.
//     - Hints: Use the filter() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
//     - Output Test Cases: ["defghi"], ["abcdef"]
let fill=["hello", "world", "abc", "defghi"];

console.log("Strings longer than 5 characrters ")
my_fil(fill)
function my_fil(fill){
    let ress=fill.filter(a => a.length>5)
    console.log(ress)
}


// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.
//     - Hints: Use the map() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], ["XYZ!", "ABC!"]

let mapstr=["hello", "world", "abc"]
console.log(`Array with all strings converted to uppercase and "!" appended`)
my_append(mapstr)
function my_append(mapstr){
    mapres=mapstr.map(a => a.toUpperCase()+"!")
    console.log(mapres)
}



// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".
//     - Hints: Use the find() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "foo", "bar"]
//     - Output Test Cases: "world", "foo"

let findarr=["hello", "world", "abc", "defghi"]

function my_find(findarr){
    let resarr=findarr.find( a => a.includes("o"))
    console.log(resarr)
}



// 8.Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: "hello,world,abc", "xyz,abc"

let joinstr=["hello", "world", "abc"]
console.log("Joining with ,")
let joinres=joinstr.join(",")
console.log(joinres)
