/*
9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
*/

// Previous array

let numbersArray = [];

for (var i = 1; i <= 25; i++) {
    numbersArray.push(i);
}


//Exercise-------------

for (var pos = 0; pos < numbersArray.length; pos += 1) {
    console.log(numbersArray[pos] / 2);
}