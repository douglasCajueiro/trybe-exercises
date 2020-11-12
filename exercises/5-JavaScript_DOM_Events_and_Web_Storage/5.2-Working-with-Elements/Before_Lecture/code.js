/* 
-----Part-1-----

1- Acesse o elemento elementoOndeVoceEsta.
2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4- Acesse o primeiroFilho a partir de pai.
5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
8- Agora acesse o terceiroFilho a partir de pai.
*/

//Exercise-1
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(ondeVoceEsta);

//Exercise-2
let paiOndeEsta = ondeVoceEsta.parentNode;
paiOndeEsta.style.color = "red";

//Exercise-3
let primeiroFilho = ondeVoceEsta.firstElementChild;
console.log(primeiroFilho);

//Exercise-4
let pai = document.getElementById('pai');
console.log(pai.firstElementChild);

//Exercise-5
let anterior = ondeVoceEsta.previousElementSibling;
console.log(anterior);

//Exercise-6
let atencao = ondeVoceEsta.parentElement.innerText;
console.log(atencao);

//Exercise-7
let terceiroFilho = ondeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

//Exercise-8
let terceiroFilhoDoPai = pai.children[2];
console.log(terceiroFilhoDoPai);



/*
-----Part-2-----

1- Crie um irmão para elementoOndeVoceEsta.
2- Crie um filho para elementoOndeVoceEsta.
3- Crie um filho para primeiroFilhoDoFilho.
4- A partir desse filho criado, acesse terceiroFilho.
*/

//Exercise-1
let novoIrmao = document.createElement('div');
novoIrmao.id = "novoIrmao"
ondeVoceEsta.parentElement.appendChild(novoIrmao);

//Exercise-2
let novoFilho = document.createElement('div');
novoFilho.id = "novoFilhoDoFilho";
ondeVoceEsta.appendChild(novoFilho);

//Exercise-3
let primeiroNeto = document.createElement('div');
primeiroNeto.id = "primeiroNeto"
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(primeiroNeto);

//Exercise-4
let ateTerceiroFilho = primeiroNeto.parentElement.parentElement.nextElementSibling;
console.log(ateTerceiroFilho);