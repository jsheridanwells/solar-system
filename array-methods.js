var el = document.getElementById("planets");
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach((element)=>el.innerText += element);


// Use the map method to create a new array where the first letter of each planet is capitalized
let capitalized = planets.map((element)=>element[0].toUpperCase() + element.slice(1, element.length));
console.log(capitalized);

// Use the filter method to create a new array that contains planets with the letter 'e'
let planetE = planets.filter((element)=> element.match(/e/g));
console.log(planetE);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
let reduced = words.reduce((a,b)=> a += ' ' + b);
console.log(reduced);