"use strict";
let userInput = "Blade Runner";

display();

async function display(){
const url = `http://www.omdbapi.com/?s=${userInput}&page=1&apikey=b69bb950`;

const response = await fetch(url);
const data = await response.json();
console.log(data);
}