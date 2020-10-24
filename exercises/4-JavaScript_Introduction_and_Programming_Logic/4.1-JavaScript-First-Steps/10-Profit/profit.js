let cost = 200;
let taxPercentage = 20;
let salePrice = 580;
let profit = 0;

if (cost <= 0 || salePrice <= 0) {
    console.log("Invalid parameters, please restart.");

} else {

    let costPlusTax = (cost + (cost / 100 * 20));

    profit = (salePrice - costPlusTax);

    console.log("Your have a $" + profit + " profit.");

}