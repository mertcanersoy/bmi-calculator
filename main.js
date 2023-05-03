const form = document.getElementById("form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
let modalTitle = document.getElementById("calculateModalTitle");
let modalBody = document.getElementById("calculateModalBody");

// const button = document.getElementById("calculate-button");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // ignore default event
  let heightValue = +heightInput.value;
  let weightValue = +weightInput.value;
  heightInput.value = "";
  weightInput.value = "";
  findBMI(heightValue, weightValue);
});

const findBMI = function (finalHeight, finalWeight) {
  const heightSquare = finalHeight * finalHeight;
  bmi = ((finalWeight / heightSquare) * 10000).toFixed(1);
  // console.log(bmi);
  result(bmi);
};

const result = function (bmi) {
  var fatLevel;

  if (bmi > 30) {
    fatLevel = "Obese";
  } else if (bmi >= 25 && bmi <= 29.9) {
    fatLevel = "Overweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    fatLevel = "Normal weight";
  } else if (bmi <= 18.5) {
    fatLevel = "Underweight";
  }
  let summary = `You're BMI is ${bmi}. You're in the <span class="fat-level">${fatLevel}</span> range.`;
  modalTitle.innerHTML = "Calculate BMI";
  modalBody.innerHTML = summary;
  // alert(`You're BMI is ${bmi}. You're in the ${fatLevel} range.`);
};

// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

// const calculateClickHandler = () => {
//   console.log(heightInput.value + " " + ageInput.value);
// };
// button.addEventListener("click", calculateClickHandler);
