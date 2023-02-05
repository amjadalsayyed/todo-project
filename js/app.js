let userName = prompt("Plesae enter your Name :");
let gender = prompt("Please enter your gender :");

let age = prompt("Please enter your age :");

if (age <= 0) {
  alert(`Your age can't be zero or less `);
}

let userchicoe = confirm("skip welcome message!");

if (userchicoe === false) {
  switch (gender) {
    case "male":
      alert(`Welcome, Mr.${userName}`);
      break;
    case "female":
      alert(`Welcome, Ms.${userName}`);
      break;
    default:
      alert(`Welcome, ${userName}`);
      break;
  }
}
