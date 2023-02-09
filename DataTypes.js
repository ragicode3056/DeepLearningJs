// let const var - scopes 

//var - gloabal 
/*
let - block 
const - block 
lexical scoping 

*/

var globalScope = 'hello';
console.log(globalScope,"globalScope");

let block = "block";
console.log(block,"block");

const max = 30;
console.log(max,"max")

//max = 50 // error - const once declared cant  be re assigned 

// array const 
const _ARR = [1,2,3,4,5];
_ARR.push(10);
console.log(_ARR,"array");

//object const 
const objectName = {
    name : "ragi",
    age :10
};
objectName.gender = "female";

console.log(objectName,"objectName")


//Dynamic cohersion  - automatically converting its data type 
let a = 10;
a = 'hello';
console.log(a,"dynamic cohersion")

//lexical scoping 
//var declared outside the function is accessible to inner fn 

let a1 = 10;
const lexicalFn = () =>{
    return a1;
}
console.log(lexicalFn(),"lexical fn")

//closures 
// variables declared in outer fn is accessed to variables declared in inner function 

function outer() {
    let outerVar = 10;
    function inner() {
        let innerVar = 20;
        return innerVar + outerVar;
    }
    return inner();
}

console.log(outer(),"outer")

// data tyeps in js 

var str = "string";
var num = 10;
var bigInt = 108268904060;
var bool = true;
var nullType = null;
var obj = {
    name : "hello"
};

var arr = [1,2,3,4];

var date = new Date('2022-10-11');
console.log(date,"date")

// null and undefined and reference error 

// null 
let nullVal = null; 

//undefined 
let name ;
console.log(name,"name") // undefined - it is declared but no value assigned to it 

// reference error 
// console.log(ref,"ref") // ref not defined 

//typeOf 

console.log(typeof(bool));






