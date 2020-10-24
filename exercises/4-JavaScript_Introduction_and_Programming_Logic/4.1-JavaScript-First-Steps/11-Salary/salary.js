let salarioBruto = 1580.00;
let valorInss, salarioBase, valorIr, deducaoIr, salarioLiquido, porcentagemInss, porcentagemIr;

if (salarioBruto <= 0) {
    console.log("Salário inválido, por favor digite novamente.");

} else {

    // Calculando INSS
    if (salarioBruto <= 1556.94) {
        valorInss = (salarioBruto / 100) * 8; // 8% de INSS
        porcentagemInss = 8;

    } else
    if (salarioBruto <= 2594.92) {
        valorInss = (salarioBruto / 100) * 9; // 9% de INSS
        porcentagemInss = 9;

    } else
    if (salarioBruto <= 5189.82) {
        valorInss = (salarioBruto / 100) * 11; // 11% de INSS
        porcentagemInss = 9;

    } else { // Acima de 5189.82
        valorInss = 570.88; // Alíquota máxima
        porcentagemInss = null;
    }
    //--------------------------------

    salarioBase = salarioBruto - valorInss;

    // Calculando IR
    if (salarioBase <= 1903.98) {
        valorIr = 0.00; // Sem desconto de IR
        deducaoIr = 0.00;
        porcentagemIr = 0;

    } else
    if (salarioBase <= 2826.65) {
        valorIr = (salarioBase / 100) * 7.5; // 7.5% de IR
        deducaoIr = 142.80; // Dedução de 142.80
        porcentagemIr = "7,5";

    } else
    if (salarioBase <= 3751.05) {
        valorIr = (salarioBase / 100) * 15; // 15% de IR
        deducaoIr = 354.80;
        porcentagemIr = 15;

    } else { // Acima de 4664.68
        valorIr = (salarioBase / 100) * 22.5; // 22.5% de IR
        deducaoIr = 869.36; // Dedução de 142.80
        porcentagemIr = "22,5";

    }

    salarioLiquido = salarioBase - (valorIr - deducaoIr);

    console.log("------------------------------------")
    console.log("")
    console.log(`Salário Bruto: ${salarioBruto}`);
    console.log("")


    console.log("----------------INSS----------------")
    if (porcentagemInss > 0) {
        console.log(`Alíquota de ${porcentagemInss}%`)
        console.log(`Total do desconto: ${valorInss}`)

    } else {
        console.log(`Alíquota máxima do INSS paga, no total de: ${valorInss}`);
    }

    console.log("------------------------------------")
    console.log("")
    console.log(`Salário Base: ${salarioBase}`);
    console.log("")
    console.log("----------Imposto de Renda----------")


    if (porcentagemIr == 0) {
        console.log("Categoria salarial isenta de Imposto de Renda.")
    } else {
        console.log(`Alíquota de ${porcentagemIr}%: ${valorIr}`)
        console.log(`Deduções no valor de ${deducaoIr}`)
        console.log(`Total a descontar: ${valorIr - deducaoIr}`)
    }

    console.log("------------------------------------")
    console.log("")
    console.log(`Salário Líquido: ${salarioLiquido}`)
    console.log("")
    console.log("------------------------------------")

}