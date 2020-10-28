/*-----------------------------------

2 - Para o segundo exercício, faça o mesmo que antes, 
mas que imprima um triângulo retângulo com 5 asteriscos de base.

Por exemplo:

n = 5

*
**
***
****
*****

-----------------------------------*/

let size = 5;
let row = "";

for (let asterisk = 1; asterisk <= size; asterisk += 1) {
    row += "*";
    console.log(row)

}