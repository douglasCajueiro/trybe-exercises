/*Tente criar uma função que exiba as habilidades do objeto student.
Cada habilidade deve ser exibida no formato:
"Nome da habilidade, Nível: valor da chave referente à habilidade".
*/

// Given Objects
const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

//Exercise:
//--------------------------------------------------------------

const showSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const i in arrayOfSkills) {
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log(student1);
showSkills(student1);