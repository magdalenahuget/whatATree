import { plants } from '/data.js';

// // Taks 2) Save the root and 3) List the plants



// const divElement = function (content) {

//   return `<div>${content.name}</div>`;
// }

// const loadEvent = function () {

//   // Write your JavaScript code after this line
//   let rootElement = document.getElementById("root")
  
//   for (let plant of plants) {
//     rootElement.insertAdjacentHTML("beforeend", divElement(plant));
//   }
  
  
//   // Write your JavaScript code before this line

// }

// window.addEventListener("load", loadEvent);



// // Task 4) Extend the html structure

// const divElement = function (content) {

//   return `<div><h2>${content.name}</h2><h3>${content.species}</h3></br></div>`;
// }

// const loadEvent = function () {

//   // Write your JavaScript code after this line
//   let rootElement = document.getElementById("root")
  
//   for (let plant of plants) {
//     rootElement.insertAdjacentHTML("beforeend", divElement(plant));
//   }
  
  
//   // Write your JavaScript code before this line

// }

// window.addEventListener("load", loadEvent);




// Task 5) Optional Task: Fix the data

const divElement = function (content) {

  let arrOfSpecies = content.species.split(', ')
  let resultSpecies = "";
  for (let spec of arrOfSpecies){
    resultSpecies += spec + '<br />';
  }
  // for (let i = 0; i < arrOfSpecies.length; i++) {

  // }


  return `<div><h2>${content.name}</h2><h3>${resultSpecies}</h3></br></div>`;
}

const loadEvent = function () {

  // Write your JavaScript code after this line
  let rootElement = document.getElementById("root")
  
  for (let plant of plants) {
    rootElement.insertAdjacentHTML("beforeend", divElement(plant));
  }
  
  
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
