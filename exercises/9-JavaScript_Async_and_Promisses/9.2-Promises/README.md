
**1) Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!**

Como? Vamos fazer juntos!

- Primeiro, veja o manual da API do site icanhazdadjoke.com.<br>
Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API :

  - Para começar, vamos fazer uma requisição via browser. Visite o site https://icanhazdadjoke.com/, e perceba que ele devolve uma página HTML com uma piada aleatória.

  - Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/" . Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.

  - Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/" . Veja que agora recebemos apenas a piada aleatória em formato texto.
  
  - Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/" . Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.