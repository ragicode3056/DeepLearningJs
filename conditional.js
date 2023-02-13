let number = 56;
if(number % 2 === 0){
    console.log("even")
}else{
    console.log("odd");
}

// conditional check 

const numberStatus = (number % 2 === 0) ? 'even' : 'odd';
console.log(numberStatus,"numberStatus")

// for loop 

for(let i =0;i<5 ; i++){
    console.log(i,"i")
}

//while loops 
let j = 0;
while(j <5){
console.log(j,"j");
j++;
}

//do while loop
let k =0; 
do
{
console.log(k,"k");
k++;
}while(k < 5 )

//switch
let gender = 'male' 
switch(gender){
    case 'male': 
    console.log("maile");
    break;
    case 'female': 
    break;
    default: 
    console.log("others")
}

let ht = 0;
let nullish = ht ?? 100;
console.log(ht,"ht")

let arr = [];
let len = arr?.[1];
console.log(len,"len")