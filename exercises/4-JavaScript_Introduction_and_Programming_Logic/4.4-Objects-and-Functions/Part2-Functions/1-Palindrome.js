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

    let given = word.toLowerCase();
    let inverted = "";

    for (let letter = given.length - 1; letter >= 0; letter -= 1) {
        inverted += given[letter];


    }

    return given === inverted;
}


//Testing the code:
//---------------------------------------------------

console.log(palindrome("Ama"));