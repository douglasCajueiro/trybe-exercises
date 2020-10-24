let grossSalary = 1500.10;
let inss, baseSalary, ir, netSalary;

if (grossSalary <= 0) {
    console.log("Invalid salary, please retype it.");

} else {

    // Calculating INSS
    if (grossSalary <= 1556.94) {
        inss = (grossSalary / 100) * 8; // 8% for INSS

    } else
    if (grossSalary <= 2594.92) {
        inss = (grossSalary / 100) * 9; // 9% for INSS

    } else
    if (grossSalary <= 5189.82) {
        inss = (grossSalary / 100) * 11; // 11% for INSS

    } else { // Above 5189.82
        inss = 570.88; // maximun rate
    }
    //--------------------------------

    baseSalary = grossSalary - inss;

    // Calculating IR
    if (baseSalary <= 1903.98) {
        // No IR

    } else
    if (baseSalary <= 2826.65) {
        taxes += (baseSalary / 100) * 7.5; // 7.5% for IR

    } else
    if (baseSalary <= 3751.05) {
        taxes += (baseSalary / 100) * 15; // 15% for IR

    } else { // Above 4664.68
        taxes += (baseSalary / 100) * 22.5; // 22.5% for IR

    }

}