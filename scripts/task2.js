/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Jennifer';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year

const nowYear = new Date().getFullYear();
// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = nowYear;
// Step 5: declare and instantiate a variable to hold the name of your picture

let jenPic = 'images/jenpic.jpg';
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', jenPic);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let jenFood = ['Steak', 'Potatoes', 'Peas', 'Salmon' ];
// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').textContent = jenFood;
// Step 3: declare and instantiate a variable to hold another favorite food

let moreFood ='carrot';
// Step 4: add the variable holding another favorite food to the favorite food array
jenFood.push(moreFood);
//this could also be done by jenFood.push('carrot');
// Step 5: repeat Step 2
document.querySelector('#food').textContent = jenFood;

// Step 6: remove the first element in the favorite foods array
jenFood.shift()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = jenFood;

// Step 8: remove the last element in the favorite foods array
jenFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = jenFood;


