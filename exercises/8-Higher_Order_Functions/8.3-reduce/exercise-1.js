const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// escreva seu código aqui
const flatten = () => arrays.reduce((acc, curr) => acc.concat(curr), []);

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
