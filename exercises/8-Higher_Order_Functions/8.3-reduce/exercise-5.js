const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) =>
  acc + name.split("").reduce((acc, char) => {
        if (char === "A" || char === "a") return acc + 1;
        return acc;
      }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
