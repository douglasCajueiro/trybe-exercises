const factorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

let n = 6;
answer = factorial(n);
console.log("The factorial of " + n + " is " + answer);

//Recursive way of solving it learned here:
//https://www.educative.io/edpresso/how-to-find-the-factorial-of-a-number-in-javascript
