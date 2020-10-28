/*-------------------------------------
4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

-------------------------------------*/

let size = 20;


let height = (size + 1) / 2;
let spacing = (size + 1) / 2;
let asterisks = 1;
let row = "";

for (let degree = 0; degree < height; degree += 1) {

    for (let space = spacing; space > 0; space -= 1) {
        row += " ";

    }

    for (let asterisk = 0; asterisk < asterisks; asterisk += 1) {
        row += "*";

    }

    console.log(row);
    asterisks += 2;
    spacing -= 1;
    row = "";

}