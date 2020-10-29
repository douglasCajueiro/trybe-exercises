/*---------------------------------------------------

Faça um for/in que mostre todos os valores das chaves do objeto.

Valor esperado no console:

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
---------------------------------------------------*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};


//Solution:
//---------------------------------------------------

for (key in info) {
    console.log(info[key]);
}