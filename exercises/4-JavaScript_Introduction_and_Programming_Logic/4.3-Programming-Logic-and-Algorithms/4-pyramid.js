/*-------------------------------------
4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

-------------------------------------*/

let size = 6; //Size of the Pyramid's base

let height = 0; //Defines the height of the Pyramid

let spacing = 0; //Spacing before asterisk in the firts row

let asterisks = 0; //Number of asterisks in the firts row

let row = ""; //Content to be printed in each row


//Checking if the base size is odd or even
if (size % 2 !== 0) {

    //Rules for odd numbers

    height = (size + 1) / 2;
    spacing = (size + 1) / 2;
    asterisks = 1;

    for (let degree = 0; degree < height; degree += 1) {

        for (let space = spacing; space > 1; space -= 1) {
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


} else {

    //Rules for even numbers

    height = size / 2;
    spacing = size / 3;
    asterisks = 2;

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


}