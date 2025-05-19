// // console.log("JS file is linked correctly!");

function bloodpressure(formName) {
  var systolic = parseInt(formName.systolic.value);
  var diastolic = parseInt(formName.diastolic.value);
  var result = document.getElementById("result");

  // Remove previous classes
  result.className = "";

  if (systolic < 80 && diastolic < 50) {
    result.innerHTML = "Very low! Possible hypotension. Jake doctor se milo.";
    result.classList.add("result-low");
  } else if (systolic < 91 && diastolic < 65) {
    result.innerHTML = "Very low!";
    result.classList.add("result-low");
  } else if (systolic < 101 && diastolic < 71) {
    result.innerHTML = "Low!";
    result.classList.add("result-low");
  } else if (systolic < 121 && diastolic < 81) {
    result.innerHTML = "Normal! Risk for coronary heart disease is minimal.";
    result.classList.add("result-normal");
  } else if (systolic < 130 && diastolic < 86) {
    result.innerHTML = "Slightly above normal.";
    result.classList.add("result-warning");
  } else if (systolic < 140 && diastolic < 90) {
    result.innerHTML = "Slightly increased risk.";
    result.classList.add("result-warning");
  } else if (systolic < 160 && diastolic < 100) {
    result.innerHTML = "Increased! Possible hypertension (Stage 1).";
    result.classList.add("result-high");
  } else if (systolic < 180 && diastolic < 110) {
    result.innerHTML = "Moderately increased! Doctor se milo.";
    result.classList.add("result-high");
  } else if (systolic < 250 && diastolic < 190) {
    result.innerHTML = "Severely increased! Seek medical advice.";
    result.classList.add("result-high");
  } else {
    result.innerHTML = "Invalid readings. Please re-check.";
  }
}
function calculateBMI() {
  var height = parseFloat(document.bmiform.height.value);
  var weight = parseFloat(document.bmiform.weight.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("bmiResult").innerHTML =
      "<h2>Please enter valid numbers.</h2>";
    return;
  }

  var bmi = weight / (height / 100) ** 2;
  var message = "";

  if (bmi < 18.5) {
    message = "Underweight 😟";
  } else if (bmi < 24.9) {
    message = "Normal weight 😊";
  } else if (bmi < 29.9) {
    message = "Overweight 😐";
  } else {
    message = "Obese 😟";
  }

  document.getElementById(
    "bmiResult"
  ).innerHTML = `<h2>Your BMI is ${bmi.toFixed(2)} (${message})</h2>`;
}
