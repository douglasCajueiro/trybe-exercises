/*
6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odd = 0;

for (var val = 0; val < numbers.length; val += 1) {
    if (numbers[val] % 2 !== 0) {
        odd += 1;
    }
}

if (odd !== 0) {
    console.log(`${odd} odd numbers found`);

} else {
    console.log("No odd value found.");
}