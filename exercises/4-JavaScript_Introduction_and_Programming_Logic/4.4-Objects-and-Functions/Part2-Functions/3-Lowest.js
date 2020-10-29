//Question:
/*---------------------------------------------------

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.

---------------------------------------------------*/
//Solution:

function lowest(array) {

    let lowNum = array[0]
    let lowIndex = 0

    for (let num = 1; num < array.length; num += 1) {
        if (array[num] < lowNum) {
            lowNum = array[num];
            lowIndex = num;
        }

    }

    return lowIndex;
}


//Testing the code:
//---------------------------------------------------

let testArray = [2, 4, 6, 7, 10, 0, -3];

console.log(lowest(testArray));