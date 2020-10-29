/*---------------------------------------------------
//Question:


Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.

---------------------------------------------------*/
//Solution:


function until(n) {

    //Storing the String that will be returned
    //It starts with "1", and will concatenate "+2", "+3"...
    let sumString = "1";

    //Storing the total until now
    let total = 1;

    //Running across the number, until n
    for (let num = 2; num <= n; num += 1) {

        //Sum the current nummber to the total
        total += num;

        //Concatenate a "+ current number" to the String
        sumString += "+" + num.toString();

    }

    //Concatenating the String with sums, and its total
    sumString += " = " + total;

    //Returning a String containing the sums and its total
    return (sumString);
}


//Testing the code:
//---------------------------------------------------

console.log(until(5));