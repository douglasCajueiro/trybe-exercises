const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Exercise 1
//-------------------------------------------------
const addKey = (object, newKey, value) => (object[newKey] = value);

addKey(lesson2, "turno", "tarde");
console.log(lesson2);
/* 
{
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'tarde'
}
*/

// Exercise 2
//-------------------------------------------------
const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson1));
// [ 'materia', 'numeroEstudantes', 'professor', 'turno' ]

// Exercise 3
//-------------------------------------------------
const objectLength = (object) => Object.keys(object).length;

console.log(objectLength(lesson3));
// 4

// Exercise 4
//-------------------------------------------------
const listValues = (object) => Object.values(object);

console.log(listValues(lesson1));
// [ 'Matemática', 20, 'Maria Clara', 'manhã' ]