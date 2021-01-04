// Function 1
const message = "Tryber x aqui!";
const tryberName = (name) => message.replace("x", name);
console.log(tryberName("Douglas"));
// Console:
// Tryber Douglas aqui!
//-------------------------------------------
const skills = [
  "Creativity",
  "Communication",
  "Problem-solving",
  "Teamwork",
  "Confidence",
];

// Function 2
const tryberAndSkills = (string) => {
  const skillsSorted = skills.sort();
  let skillsMessage = `${string}
My top 5 skills are:
  `;
  for (const skill of skillsSorted) {
    skillsMessage += `
* ${skill}`;
  }
  skillsMessage += `
#goTrybe`;
  return skillsMessage;
};

console.log(tryberAndSkills(tryberName("Douglas")));
// Console:
/*
Tryber Douglas aqui!
My top 5 skills are:
  
* Communication
* Confidence
* Creativity
* Problem-solving
* Teamwork
#goTrybe
*/
