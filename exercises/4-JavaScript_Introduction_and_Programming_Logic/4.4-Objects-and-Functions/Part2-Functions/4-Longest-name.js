/*---------------------------------------------------
//Question:


Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.

---------------------------------------------------*/
//Solution:


function longestName(arrayOfNames) {

    //Storing the first value to start the comparisons
    let biggestName = arrayOfNames[0];

    //Running across the whole array
    for (let name = 1; name < arrayOfNames.length; name += 1) {

        //Checking if the current name is longer than the one stored in the * let biggestName *
        if (arrayOfNames[name].length > biggestName.length) {

            //If it's longer, it overwrites the value stored until now
            biggestName = arrayOfNames[name];

        }
    }

    //Returning the longest number found
    return biggestName;
}


//Testing the code:
//---------------------------------------------------

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(longestName(testArray));