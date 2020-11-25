const assert = require("assert");

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// implemente seus testes aqui
assert.strictEqual(
  myFizzBuzz(15),
  "fizzbuzz",
  "It must return 'fizzbuzz' when the number is divisible by 3 and 5"
); // 1

assert.strictEqual(
  myFizzBuzz(6),
  "fizz",
  "It must return 'fizz' when the number is divisible only by 3"
); // 2

assert.strictEqual(
  myFizzBuzz(10),
  "buzz",
  "It must return 'buzz' when the number is divisible only by 5"
); // 3

const testNum = 7;
assert.strictEqual(
  myFizzBuzz(testNum),
  testNum,
  "It must return the provided number when it is not divisible by 3 nor 5"
);
