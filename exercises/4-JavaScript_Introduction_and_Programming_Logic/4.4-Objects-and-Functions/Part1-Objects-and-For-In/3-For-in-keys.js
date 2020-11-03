/*---------------------------------------------------

Faça um for/in que mostre todas as chaves do objeto.


Valor esperado no console:

personagem
origem
nota
recorrente

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
    console.log(key);
}