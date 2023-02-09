// numbers 
let num = 2;
let strNum = num.toString();
console.log(strNum,"str");

let typeCon = 12+ 2 + "str";
console.log(typeCon,"str type con")

// round off 

let avergae = 12.345673;
console.log(avergae.toFixed(),"average fixed");

console.log(avergae.toExponential(1),"exponential fixed");

console.log(avergae.toPrecision(4),"precision");

//  convert date to string 

const date1 = new Date('2022-1-2');
const strDate = date1.toString();
console.log(strDate,"strDate");

console.log("toLocaleStr",date1.toLocaleDateString());

console.log("toLocaleStr",date1.toLocaleTimeString());

console.log("toLocaleStr",date1.toTimeString());

// converting bool to string 

const boolVal = true;
const boolStr = boolVal.toString();
console.log(typeof(boolStr),"boolStr");

//string to bool 
// const str = "true";
// const strNum1 = str(true);
// console.log(strNum1,"num")




//locale - general format 

let name = "RAGINI JAy";
console.log("to lower",name.toLowerCase());
console.log("to lower",name.toLocaleLowerCase());

const low = "ragini jay"
console.log("to upper",low.toUpperCase());








