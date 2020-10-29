/*---------------------------------------------------
//Question:


Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.


//Solution:
---------------------------------------------------*/

function highest(array) {

    let topNum = array[0]
    let topIndex = 0

    for (let num = 1; num < array.length; num += 1) {
        if (array[num] > topNum) {
            topNum = array[num];
            topIndex = num;
        }

    }

    return topIndex;
}


//Testing the code:
//---------------------------------------------------

let testArray = [2, 3, 6, 7, 10, 1];

console.log(highest(testArray));