const assert = require("assert");

const obj1 = {
  title: "My Title",
  description: "My Description",
};

const obj2 = {
  description: "My Description",
  title: "My Title",
};

const obj3 = {
  title: "My Different Title",
  description: "My Description",
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2, "The JSON objects are not equals"); // 1

assert.notDeepStrictEqual(obj2, obj3, "The JSON objects are equals"); // 2
