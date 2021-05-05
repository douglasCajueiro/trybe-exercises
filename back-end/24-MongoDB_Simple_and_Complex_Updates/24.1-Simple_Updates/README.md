# 24.1 - MongoDB - Updates Simples

## Exercícios:

Para os desafios a seguir, foi utilizado como base o dataset abaixo:

``` json
{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}

```
- 1 : Altere o imdbRating para 7.7 no filme Batman .

  Solução:[desafio1.js](./desafio1.js)

- 2 : Altere budget para 1 no filme Godzilla .

  Solução:[desafio2.js](./desafio2.js)

- 3 : Altere budget para 15 e imdbRating para 5.5 no filme 
Home Alone .

  Solução:[desafio3.js](./desafio3.js)

- 4 : Aumente em 2 o imdbRating do filme Batman .

  Solução:[desafio4.js](./desafio4.js)

- 5 : Aumente em 5 o budget do filme Home Alone .

  Solução:[desafio5.js](./desafio5.js)

- 6 : Multiplique por 4 o imdbRating do filme Batman .

  Solução:[desafio6.js](./desafio6.js)

- 7 : Renomeie o campo budget para estimatedBudget do 
filme Batman .

  Solução:[desafio7.js](./desafio7.js)

- 8 : Utilize o operador $min para alterar o budget para 5 
do filme Home Alone .

  Solução:[desafio8.js](./desafio8.js)

- 9 : Utilize o operador $max para alterar o imdbRating 
para - 8.6 do filme Godzilla . Além disso, altere a 
categoria "adventure" para "thriller" do filme Godzilla .

  Solução:[desafio9.js](./desafio9.js)

- 10 : Utilizando o operador $currentDate , crie um campo 
chamado lastUpdated com o tipo timestamp no filme Home 
Alone .

  Solução:[desafio10.js](./desafio10.js)

- 11 : Utilizando uma única operação, crie um campo 
chamado sequels e atribua a ele o valor 0 em todos os 
documentos.

  Solução:[desafio11.js](./desafio11.js)

- 12 : Utilizando uma única operação, remova os campos 
budget e estimatedBudget em todos os documentos.

  Solução:[desafio12.js](./desafio12.js)

- 13 : Para os filmes Batman ou Home Alone , atribua a 
imdbRating o valor 17 , caso o valor de imdbRating seja 
menor que 17 .

  Solução:[desafio13.js](./desafio13.js)

**_<div align="right">Douglas Cajueiro - 04/05/2021 </div>_**
