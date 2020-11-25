# 7.3 - Testes unitários em JavaScript

### Praticando a implementação de testes

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.<br>
Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

**1) A função sum(a, b) retorna a soma do parâmetro a com o b**

- **1** - Teste se o retorno de sum(4, 5) é 9
- **2** - Teste se o retorno de sum(0, 0) é 0
- **3** - Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
- **4** - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

**2) A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array**

- **1** - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
- **2** - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- **3** - Verifique se o array passado por parâmetro não sofreu alterações
- **4** - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
