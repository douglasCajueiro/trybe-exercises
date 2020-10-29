/*---------------------------------------------------

Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
"Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".


Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!

---------------------------------------------------*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};


//Solution:
//---------------------------------------------------

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (key in info) {
    if (key == 'recorrente') {
        if (info.recorrente == "Sim" && info2.recorrente == "Sim") {
            console.log("Ambos são recorrentes")

        } else
        if (info.recorrente == "Não" && info2.recorrente == "Não") {
            console.log("Não são recorrentes");
        } else {
            console.log(info.recorrente + " e " + info2.recorrente)
        }
    } else {
        console.log(info[key] + " e " + info2[key]);
    }

}