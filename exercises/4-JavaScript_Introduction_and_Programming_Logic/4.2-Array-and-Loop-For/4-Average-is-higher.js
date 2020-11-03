/*
4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
"valor maior que 20".

Caso não seja, imprima a mensagem: 
"valor menor ou igual a 20";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;
for (var val = 0; val < numbers.length; val += 1) {
    total += numbers[val];
}
let media = Math.round(total / (numbers.length - 1));

if (media > 20) {
    console.log("The average is higher than 20");
} else {
    console.log("The average is lower or equal 20");
}