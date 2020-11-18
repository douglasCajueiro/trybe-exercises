const body = document.querySelector("body");
const brazilianStates = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RO",
  "RS",
  "RR",
  "SC",
  "SE",
  "SP",
  "TO",
];
const stateInput = document.getElementById("state-input");

function addOptions(element, optionsArray) {
  for (let option = 0; option < optionsArray.length; option += 1) {
    const newOption = document.createElement("option");
    newOption.innerText = optionsArray[option];
    stateInput.appendChild(newOption);
  }
}

addOptions(stateInput, brazilianStates);

const startDate = document.getElementById("start-date-input");

function validateDate() {
  const fullDate = startDate.value;

  const day = fullDate.slice(0, 2);
  const month = fullDate.slice(3, 5);
  const year = fullDate.slice(-4);
  const slashes = fullDate[2] + fullDate[5];

  if (fullDate === "") {
    alert("Please fill the date field");
  } else if (slashes !== "//") {
    alert("Invalid date format, please retype it.");
  } else if (day < 1 || day > 31) {
    alert("The day must be valid, please retype the date.");
  } else if (month < 1 || month > 12) {
    alert("The month must be valid, please retype the date");
  } else {
    return true;
  }
}

function createResumeDiv(event) {
  event.preventDefault();
  validateDate();

  if (validateDate() == true) {
    const resumeDiv = document.createElement("div");
    resumeDiv.classList.add("resume-div");
    const allLabels = document.querySelectorAll("label");
    const allInputs = document.querySelectorAll("input, select, textarea");

    for (let index = 0; index < allInputs.length; index += 1) {
      const label = document.createElement("h4");
      const info = document.createElement("p");
      label.innerText = allLabels[index].innerText;
      info.innerText = allInputs[index].value;
      resumeDiv.appendChild(label);
      resumeDiv.appendChild(info);
    }
    body.appendChild(resumeDiv);
  }
}

const btnSubmit = document.getElementById("submit-btn");

btnSubmit.addEventListener("click", createResumeDiv);
