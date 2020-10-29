/*---------------------------------------------------
//Question:


Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.


//Solution:
---------------------------------------------------*/

function highest(array) {

    //Storing the current highest number 
    //(It stores the first value)
    let topNum = array[0]

    //Storing the current highest number's index
    let topIndex = 0

    //Running across the array
    //(It starts on the index 1, that will be compared to the index 0)
    for (let num = 1; num < array.length; num += 1) {

        //Comparing the current value to the current highest number
        if (array[num] > topNum) {

            //Storing its number
            topNum = array[num];

            //Storing its index
            topIndex = num;
        }

    }

    //Returning the highest number's index in the array
    return topIndex;
}


//Testing the code:
//---------------------------------------------------

let testArray = [2, 3, 6, 7, 10, 1];

console.log(highest(testArray));