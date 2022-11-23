/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda"
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob)


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year; 
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; 
//const job; 

var job = 'programmer';
job = 'teacher';



const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 **3);
//2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++; //x = x + 1
x --;
x --; //x = x - 1

console.log (x);

//Comparison operators
console.log (ageJonas > ageSarah); // >, <, >=, <=
console.log (ageSarah >= 18);

const isFullAge = ageSarah >= 18; 

console.log(now - 1991 > now - 2018);



const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


//coding challenge

let markMass = 78
let markHeight = 1.69

let johnMass = 92
let johnHeight = 1.95

markMass = 95
markHeight = 1.88

johnMass = 85
johnHeight = 1.76 

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2
const markHigherBMI = markBMI > johnBMI

console.log (markBMI, johnBMI)
console.log (markHigherBMI)


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1001;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log (jonasNew)

console.log (`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`);
*/

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else 
    {const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
