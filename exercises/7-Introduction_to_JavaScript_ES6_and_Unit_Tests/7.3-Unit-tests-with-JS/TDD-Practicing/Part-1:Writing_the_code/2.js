const assert = require("assert");

// escreva a função wordLengths aqui
const wordLengths = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let currentLength = 0;
    for (let ind = 0; ind < array[i].length; ind += 1) {
      currentLength += 1;
    }
    newArray[i] = currentLength;
  }
  return newArray;
};
//----------------------------------

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
