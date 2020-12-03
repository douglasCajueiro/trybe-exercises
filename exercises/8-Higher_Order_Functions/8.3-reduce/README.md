## 8.2 - Higher Order Functions - reduce( )

<hr>

**1) Dada uma matriz de matrizes, transforme em uma única matriz.**

Solução: [exercise-1.js](./exercise-1.js)

<hr>

**2) Crie uma string com os nomes de todas as pessoas autoras.**

Solução: [exercise-2.js](./exercise-2.js)

<hr>

**3) Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.**

Solução: [exercise-3.js](./exercise-3.js)

<hr>

**4) Encontre o livro com o maior nome.**

Solução: [exercise-4.js](./exercise-4.js)

<hr>

**5) Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.**

Solução: [exercise-5.js](./exercise-5.js)

<hr>

**6) Agora vamos criar um novo array de objetos a partir das informações abaixo:**

- Cada objeto terá o formato:

```js script
{ name: nome do aluno, average: media das notas }
```
Para isso vamos assumir que a posição 0 de **notas** refere-se ao aluno na posição 0 de **alunos** , aqui além de **reduce** será necessário utilizar também a função **map**.


**Dica:** Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected.
