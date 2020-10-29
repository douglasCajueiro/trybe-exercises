/*---------------------------------------------------

Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara.

verificaPalindrome("arara");
Retorno esperado: true

verificaPalindrome("desenvolvimento");
Retorno esperado: false


---------------------------------------------------*/
//Solution:

function palindrome(word) {

    //Converting the whole word into lowercase
    let given = word.toLowerCase();

    //Declaring a variable that will store the inverted word
    let inverted = "";

    //Running across the word backwards
    for (let letter = given.length - 1; letter >= 0; letter -= 1) {

        //Concatenating the current letter
        inverted += given[letter];


    }

    //Returning if it's a palindrome
    return given === inverted;
}


//Testing the code:
//---------------------------------------------------

console.log(palindrome("Ama"));