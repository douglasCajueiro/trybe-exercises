//Question:
/*---------------------------------------------------

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.

---------------------------------------------------*/
//Solution:

function lowest(array) {

    //Storing the current lowest number 
    //(It stores the first value)
    let lowNum = array[0]

    //Storing the current lowest number's index
    let lowIndex = 0

    //Running across the array
    //(It starts on the index 1, that will be compared to the index 0)
    for (let num = 1; num < array.length; num += 1) {

        //Comparing the current value to the current lowest number
        if (array[num] < lowNum) {

            //Storing its number
            lowNum = array[num];

            //Storing its index
            lowIndex = num;
        }

    }

    //Returning the index of the lowest number found in the array
    return lowIndex;
}


//Testing the code:
//---------------------------------------------------

let testArray = [2, 4, 6, 7, 10, 0, -3];

console.log(lowest(testArray));