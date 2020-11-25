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
// console.log(lesson2);
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

// console.log(listKeys(lesson1));
// [ 'materia', 'numeroEstudantes', 'professor', 'turno' ]

// Exercise 3
//-------------------------------------------------
const objectLength = (object) => Object.keys(object).length;

// console.log(objectLength(lesson3));
// 4

// Exercise 4
//-------------------------------------------------
const listValues = (object) => Object.values(object);

// console.log(listValues(lesson1));
// [ 'Matemática', 20, 'Maria Clara', 'manhã' ]

// Exercise 5
//-------------------------------------------------
const allLessons = Object.assign({ lesson1, lesson2, lesson3 });

//console.log(allLessons);
/*
{
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'tarde'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}
*/

// Exercise 6
//-------------------------------------------------
// const StudentsTotal = () => {
//   let total = 0;
//   for (const lesson in allLessons) {
//     total += lesson.numeroEstudantes;
//   }
//   return total;
// };

const studentsTotal = () => {
  let total = 0;

  for (const lesson in allLessons) {
    if (lesson.numeroEstudantes !== undefined) {
      total += lesson.numeroEstudantes;
    }
  }
  return total;
};

//console.log(studentsTotal(allLessons));

// Exercise 7
//-------------------------------------------------
const getValueByNumber = (object, keyNumber) =>
  Object.values(object)[keyNumber];

//console.log(getValueByNumber(lesson1, 0));
// Matemática

// Exercise 8
//-------------------------------------------------
const verifyPair = (object, key, value) => object[key] === value;

//console.log(verifyPair(lesson3, "turno", "noite"));
// true
//console.log(verifyPair(lesson3, "materia", "Maria Clara"));
//false
