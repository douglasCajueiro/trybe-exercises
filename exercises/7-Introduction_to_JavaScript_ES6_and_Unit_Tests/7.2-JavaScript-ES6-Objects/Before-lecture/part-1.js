/*
Crie uma função que receba três parâmetros, sendo eles: 
um objeto, o nome de uma chave e o seu valor. 
O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
*/

const createEntry = (object, key, value) => {
  object[key] = value;
  return object;
};

const animals = {
  Mammal: "Elephant",
  Insect: "Bee",
};
console.log(createEntry(animals, "Reptile", "Crocodile"));
