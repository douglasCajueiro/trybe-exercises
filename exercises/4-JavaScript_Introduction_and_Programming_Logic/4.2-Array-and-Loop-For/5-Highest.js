/*
5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highest = numbers[0];

for (var pos = 1; pos < numbers.length; pos += 1) {
    if (numbers[pos] > highest)
        highest = numbers[pos];
}

console.log(`The highest value is ${highest}`);