/*
O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

-----Part-1-----
1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
2- Adicione a tag div com a classe main-content como filho da tag body;
3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
6- Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
9- Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.
*/

//Exercise-1
let title = document.createElement('h1');
title.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(title);


//Exercise-2
let mainContent = document.createElement('div');
mainContent.className = "main-content";
document.body.appendChild(mainContent);

//Exercise-3
let centerContent = document.createElement('div');
centerContent.className = "center-content";
mainContent.appendChild(centerContent);

//Exercise-4
let someText = document.createElement('p');
someText.innerHTML = "Mussum Ipsum. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. A ordem dos tratores não altera o pão duris. Quem num gosta di mim que vai caçá sua turmis!";
centerContent.appendChild(someText);

//Exercise-5
let leftContent = document.createElement('div');
leftContent.className = "left-content";
mainContent.appendChild(leftContent);

//Exercise-6
let rightContent = document.createElement('div');
rightContent.className = "right-content";
mainContent.appendChild(rightContent);

//Exercise-7
let smallImage = document.createElement("img");
smallImage.src = "https://picsum.photos/200";
leftContent.appendChild(smallImage);

//Exercise-8
let list = document.createElement('ul');
for (let num = 1; num < 11; num += 1) {
    let listItem = document.createElement('li');
    listItem.innerHTML = num;
    list.appendChild(listItem);

}
rightContent.appendChild(list);

//Exercise-9

for (let tag = 1; tag <= 3; tag += 1) {
    let h3 = document.createElement('h3');
    h3.innerHTML = `h1 nº${tag}`;
    mainContent.appendChild(h3);

}


/*
-----Part-2-----
  Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

1- Adicione a classe title na tag h1 criada;
2- Adicione a classe description nas 3 tags h3 criadas;
3- Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
4- Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;
5- Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
6- Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
*/

//Exercise-1
document.querySelector('h1').className = "title";