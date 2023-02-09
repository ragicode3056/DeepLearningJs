let arr = [1,2,3,4,5];

let sum = arr.reduce((prev,curr)=> prev+curr);
console.log(sum,"sum");

let sum1 = arr.reduce((prev,curr)=>{
    return prev+curr
},0)

console.log(sum1,"sum1")

//pollyfil 

Array.prototype.myReduce = function (callback,initialValue=null){
let accumulator = initialValue;
for(let i =0; i<this.length ; i ++){
    accumulator = callback(accumulator,this[i],i,this);
    
}
return accumulator;
}

let myReducer = arr.myReduce((initialValue,accumulator)=>{
    return initialValue + accumulator
},0);

console.log(myReducer,"my reducer")