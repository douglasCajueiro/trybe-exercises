/*---------------------------------------------------
//Question:


Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.

---------------------------------------------------*/
//Solution:


function until(n) {

    let sumString = "1";
    let total = 1;

    for (let num = 2; num <= n; num += 1) {
        total += num;
        sumString += "+" + num.toString();

    }
    sumString += " = " + total;
    return (sumString);
}


//Testing the code:
//---------------------------------------------------

console.log(until(5));