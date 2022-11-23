//const country = "United States";
//const continent = "North America";
let population = 3231.9;
let language;
language = "English";
const country = "United States";
const continent = "North America";
const isIsland = false;

console.log(country);
console.log(continent);
console.log(population);



console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



console.log(population / 2);
population++;
console.log(population > 6);
console.log(population <33);

const description = country + 'is in ' + continent + ', and its ' + population + ' million ' + ' people speak ' + language;
console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew)

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    const populationDifference = 33 - population
    console.log(`${country}'s population is 
    ${populationDifference} million below average`)
}
 /* to make it cleaner: 
} else {
    console.log(`${country}'s population is 
    ${33 - population} million below average`);