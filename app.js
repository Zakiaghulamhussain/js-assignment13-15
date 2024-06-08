//Question#1
//const studentNames = [];


//Question#2
const studentNames = new Array();

//Question#3
const stringsArray = ["apple", "banana", "orange", "grape"];


//Question#4
const numbersArray = [1, 2, 3, 4, 5];


//Question#5
const booleanArray = [true, false, true, false];

//Question#6
const mixedArray = ["apple", 123, true, "banana", 456, false];


//Question#7
const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write(`<li>${qualifications[i]}</li>`);
}
document.write("</ul>");


//Question#8
const student = ["Alice", "Bob", "Charlie"];
const scores = [400, 450, 380];
for (let i = 0; i < student.length; i++) {
    const score = scores[i];
    const percentage = (score / 500) * 100;
    console.log(`${student[i]} scored ${score} marks out of 500, which is ${percentage}%`);
}


//Question#9
// Initialize array with color names
let colors = ["red", "green", "blue"];

// Display array elements
document.write("<h2>Initial Array:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);

// Ask the user what color to add to the beginning
const colorToAddStart = prompt("Enter the color to add to the beginning:");
colors.unshift(colorToAddStart);

// Display updated array
document.write("<h2>After adding color to the beginning:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);

// Ask the user what color to add to the end
const colorToAddEnd = prompt("Enter the color to add to the end:");
colors.push(colorToAddEnd);

// Display updated array
document.write("<h2>After adding color to the end:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);

// Add two more colors to the beginning
colors.unshift("purple", "yellow");

// Display updated array
document.write("<h2>After adding two more colors to the beginning:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);

// Delete the first color in the array
colors.shift();

// Display updated array
document.write("<h2>After deleting the first color:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);

// Delete the last color in the array
colors.pop();

// Display updated array
document.write("<h2>After deleting the last color:</h2>");
document.write(`<p>${colors.join(", ")}</p>`);

// Ask the user at which index to add a color and the color name
const indexToAdd = parseInt(prompt("Enter the index to add a color:"));
const colorToAdd = prompt("Enter the color to add:");

// Add the color to the desired position/index
colors.splice(indexToAdd, 0, colorToAdd);

//Question#10
const studentScores = [85, 72, 93, 64, 91];
studentScores.sort((a, b) => a - b);
console.log("Student scores in ascending order:");
console.log(studentScores);

//Question#11
// Initialize an array with city names
const cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy 3 array elements from cities array to selectedCities array
const selectedCities = cities.slice(0, 3);

// Display the selectedCities array
console.log("Selected cities:");
console.log(selectedCities);


//Question#12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

console.log(singleString);


//Question#13
const fifoArray = [];

fifoArray.push("value1");
fifoArray.push("value2");
fifoArray.push("value3");

const firstValue = fifoArray.shift(); 
const secondValue = fifoArray.shift(); 
const thirdValue = fifoArray.shift();

console.log(firstValue); 
console.log(secondValue);
console.log(thirdValue);



//Question#14
const lifoArray = [];
lifoArray.push("value1");
lifoArray.push("value2");
lifoArray.push("value3");
const lastValue = lifoArray.pop(); 
const secondLastValue = lifoArray.pop(); 
const thirdLastValue = lifoArray.pop();

console.log(lastValue); 
console.log(secondLastValue); 
console.log(thirdLastValue); 

//Question#15
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let selectHTML = "<select id='phoneManufacturersSelect'>";
for (let i = 0; i < phoneManufacturers.length; i++) {
    selectHTML += `<option value='${phoneManufacturers[i]}'>${phoneManufacturers[i]}</option>`;
}
selectHTML += "</select>";
document.write(selectHTML);



