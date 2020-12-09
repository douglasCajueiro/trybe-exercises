# 9.1 - JavaScript - Async and Callbacks

### Exercícios feitos durante o bloco 9.1 do curso de desenvolvimento da trybe.

<hr>

**1) Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?**

Código: [Exercício 1](./exercise-1.js)

**Resposta:** A B C

<hr>

**2) Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?**

Código: [Exercício 2](./exercise-2.js)

**Resposta:** A C B

<hr>

**3) A função getPlanet abaixo imprime o planeta Marte de forma síncrona.**

- Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

  **Solução:** [Exercício 3](./exercise-3.js)

<hr>

**4) Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.**

O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.

- Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

  **Solução:** [Exercício 4](./exercise-4.js)

<hr>

**5) Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte.**

- Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

  **Solução:** [Exercício 5](./exercise-5.js)

<hr>

**6) Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações.**

- Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

  **Solução:** [Exercício 6](./exercise-6.js)

<hr>