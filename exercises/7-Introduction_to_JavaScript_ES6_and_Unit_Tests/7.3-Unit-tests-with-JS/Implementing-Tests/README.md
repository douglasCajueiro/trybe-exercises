### Praticando a implementação de testes

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.<br>
Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

<hr>

**1) A função sum(a, b) retorna a soma do parâmetro a com o b**

- **1** - Teste se o retorno de sum(4, 5) é 9

- **2** - Teste se o retorno de sum(0, 0) é 0

- **3** - Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)

- **4** - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

**Solução:** [Exercício 1](./1.js)

<hr>

**2) A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array**

- **1** - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

- **2** - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

- **3** - Verifique se o array passado por parâmetro não sofreu alterações

- **4** - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

**Solução:** [Exercício 2](./2.js)

<hr>

**3) A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array**

- **1** - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado

- **2** - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

- **3** - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações

- **4** - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

**Solução:** [Exercício 3](./3.js)

<hr>

**4) A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número**

- **1** - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

- **2** - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

- **3** - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

- **4** - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

- **5** - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

**Solução:** [Exercício 4](./4.js)

<hr>

**5) Compare dois objetos (JSON) para verificar se são idênticos ou não**

**Solução:** [Exercício 5](./5.js)