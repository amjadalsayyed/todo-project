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
