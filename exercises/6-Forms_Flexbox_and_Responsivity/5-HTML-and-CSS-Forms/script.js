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
