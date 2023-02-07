"use strict";

let userName = prompt("Plesae enter your Name :");

let gender = prompt("Plesae enter your gender :");

let ageCheck = true;
let userAge;
while (ageCheck === true) {
  let age = prompt("Plesae enter your age :");
  if (age > 0) {
    ageCheck = false;
    userAge = age;
  } else {
    alert("Your age cant be 0 or less");
  }
}

let userChicoe = confirm("skip welcome message ?");

if (userChicoe === false) {
  switch (gender) {
    case "male":
      alert(`Welcome, Mr.${userName} you are ${userAge} years old`);
      break;
    case "female":
      alert(`Welcome, Ms.${userName} you are ${userAge} years old`);
      break;
    default:
      alert(`Welcome, ${userName} you are ${userAge} years old`);
      break;
  }
}

let qus1 = prompt("Are you a web devlooper ? (Yes or No)");
let qus2 = prompt("Do you know python ? (Yes or No)");
let qus3 = prompt("Do you know PHP ? (Yes or No)");

let arr = [qus1, qus2, qus3];

function checkingAnswers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr[i] = "invalid";
    }
  }
}
checkingAnswers(arr);

function printingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`your answer for qustion number ${i + 1} is : ` + arr[i]);
  }
}

printingArray(arr);
