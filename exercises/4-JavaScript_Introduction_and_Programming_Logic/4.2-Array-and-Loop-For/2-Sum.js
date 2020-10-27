/*
2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

for (var val = 0; val < numbers.length; val += 1) {
    total += numbers[val];
}
console.log(total);