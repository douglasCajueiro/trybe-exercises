/*----------------------------------

3- Agora inverta o lado do triângulo. 

Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
-----------------------------------*/


let size = 5;


let spacing = size - 1;
let asterisks = 1;
let row = "";

for (let count = 0; count < size; count += 1) {


    for (let space = 0; space < spacing; space += 1) {
        row += " ";

    }

    for (let asterisk = 0; asterisk < asterisks; asterisk += 1) {
        row += "*";

    }

    console.log(row);
    row = "";

    spacing -= 1;
    asterisks += 1;

}