//string functions

/*
length 
toLowerCase
toUpperCase
replace
replaceAll
concat 
*/
const name = 'ragini';

console.log(name.length,"length");


console.log(name.toUpperCase(),"length");

const people_entrollement_id = '5Ghyeju0-jdk9-haj89RST';

console.log(people_entrollement_id.toLocaleLowerCase().replace(/-/g,''),"replace");

const test = 'ght+ghsi+hduie'
console.log(test.replace(/h/g,''))

const first = "tom"
const second = "jerry";
const third = "anne";

const concat = first.concat(second,third);
console.log(first,concat,"Concat");

const nameReplace = "test in a city that test all test cases ";
console.log(nameReplace.replaceAll('test','good'),"replace all");

// trim - genreally remove white spaces 
const trimName = '  Hae I am Ragini   ';
console.log(trimName.trim(),"trim spaces");
console.log(trimName.trimStart(),"trim start");
console.log(trimName.trimEnd(),"trim end");


//pad start and pad end 

//
