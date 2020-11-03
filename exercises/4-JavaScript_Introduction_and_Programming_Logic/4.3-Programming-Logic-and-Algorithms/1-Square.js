/*----------------------------------------

1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

Por exemplo:
n = 5

*****
*****
*****
*****
*****

----------------------------------------*/

let size = 5;
let row = "";

for (let asterisk = 1; asterisk <= size; asterisk += 1) {
    row += "*";

}

for (let currentRow = 1; currentRow <= size; currentRow += 1) {
    console.log(row);

}