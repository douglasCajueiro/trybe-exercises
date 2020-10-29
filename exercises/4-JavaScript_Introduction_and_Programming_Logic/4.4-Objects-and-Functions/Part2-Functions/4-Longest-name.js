/*---------------------------------------------------
//Question:


Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.

---------------------------------------------------*/
//Solution:


function longestName(arrayOfNames) {

    let biggest = arrayOfNames[0];

    for (let name = 1; name < arrayOfNames.length; name += 1) {

        if (arrayOfNames[name].length > biggest.length) {

            biggest = arrayOfNames[name];

        }
    }

    return biggest;
}


//Testing the code:
//---------------------------------------------------

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(longestName(testArray));