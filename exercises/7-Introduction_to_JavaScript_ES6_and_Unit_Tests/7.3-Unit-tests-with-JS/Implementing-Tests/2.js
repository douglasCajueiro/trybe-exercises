const assert = require("assert");

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const testArray = [1, 2, 3, 4, 5];
// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // 1
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); // 2
assert.deepStrictEqual(myRemove(testArray), testArray); // 3
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); // 4
