let grossSalary = 1500.10;
let taxes = 0.00;
let netSalary = 0.00;

if (grossSalary <= 0) {
    console.log("Invalid salary, please retype it.");

} else {

    // Calculating INSS
    if (grossSalary <= 1556.94) {
        taxes = (grossSalary / 100) * 8; // 8% for INSS

    } else
    if (grossSalary >= 1556.95 || grossSalary <= 2594.92) {
        taxes = (grossSalary / 100) * 9; // 9% for INSS

    } else
    if (grossSalary >= 2594.93 || grossSalary <= 5189.82) {
        taxes = (grossSalary / 100) * 11; // 11% for INSS

    } else { // Above 5189.82
        taxes = 570.88; // maximun rate
    }
    //--------------------------------

    // Calculating IR
    if (grossSalary <= 1903.98) {
        // No IR

    } else
    if (grossSalary >= 1903.99 || grossSalary <= 2826.65) {
        taxes += (grossSalary / 100) * 7.5; // 7.5% for IR

    } else
    if (grossSalary >= 2826.66 || grossSalary <= 3751.05) {
        taxes += (grossSalary / 100) * 15; // 15% for IR

    } else { // Above 4664.68
        taxes += (grossSalary / 100) * 22.5; // 22.5% for IR

    }

}