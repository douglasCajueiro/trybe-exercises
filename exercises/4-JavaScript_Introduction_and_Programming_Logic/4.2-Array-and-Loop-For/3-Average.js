/*
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;
for (var val = 0; val < numbers.length; val += 1) {
    total += numbers[val];
}
let media = total / (numbers.length - 1);
console.log(Math.round(media));