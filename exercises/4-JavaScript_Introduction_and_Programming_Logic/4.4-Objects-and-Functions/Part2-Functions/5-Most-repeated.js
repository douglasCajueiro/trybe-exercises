/*---------------------------------------------------
//Question:


Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.


//Solution:
---------------------------------------------------*/

let array = [2, 3, 2, 5, 8, 2, 3, 5, 5, 4, 5, 5];

function mostRepeated(array) {

    //Variable that stores the amount of repetitions fot each value of the array used as parameter
    let repetitions = [];

    //Initializing the repetitions counter
    for (const key in array) {
        repetitions.push(1);
    }

    //Running across the array, value by value
    for (let currentValue = 0; currentValue < array.length; currentValue += 1) {

        //Comparing the current value to all the other values of the array
        for (let comparedValue = 0; comparedValue < array.length; comparedValue += 1) {

            //Checking if it's not comparing the same position of the array
            if (currentValue != comparedValue) {

                //If current value and the compared value are equal
                if (array[currentValue] == array[comparedValue]) {

                    //It sums 1 to the repetitions counter, at the same position the value was in the given array
                    repetitions[comparedValue] += 1;

                }

            }

        }
    }

    //Function highest, from exercise nº2
    //----------------------------------

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
    //-------------------------------------

    //Discovering the first position of the most repeated value
    let mostRepeatedPos = highest(repetitions);


    return array[mostRepeatedPos];

}


//Testing the code:
//---------------------------------------------------

console.log(mostRepeated(array));