/*---------------------------------------------------
//Question:


Crie uma função que receba uma string word e outra string ending.
Verifique se a string ending é o final da string word.
Considere que a string ending sempre será menor que a string word.


Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true

verificaFimPalavra("trybe", "be");
Retorno esperado: true

verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false

---------------------------------------------------*/
//Solution:


function verifyEnding(word, ending) {

    //Array that receives a boolean for each compared letter (true = equal // false = different)
    let equalLetter = [];

    //Comparing the words backwards.
    for (let letter = 0; letter < ending.length; letter += 1) {
        equalLetter.push(word[word.length - 1 - letter] === ending[ending.length - 1 - letter]);

    }
    //Returns if all the compared letters are equal
    return equalLetter.indexOf("false") === -1;
}


//Testing the code:
//---------------------------------------------------

console.log(verifyEnding("Tryber", "ber"));