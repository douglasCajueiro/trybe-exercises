# 24.2 - MongoDB - Updates Complexos ``` Arrays pt1```

## Configuração
Para os desafios a seguir, foi utilizado como base o mesmo dataset do dia 24.1.

Código abaixo:

``` javascript
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
Antes de começar os exercícios, faça a inserção dos documentos acima.

<hr>

## Exercícios

<br>

### 1) Adicione a categoria "superhero" ao filme Batman.

  Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"action",
		"adventure",
		"superhero"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}
```

Solução: [desafio1.js](./desafio1.js)

<hr>

### 2) Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman.

  Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"action",
		"adventure",
		"superhero",
		"villain",
		"comic-based"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}

```

Solução: [desafio2.js](./desafio2.js)

<hr>

### 3) Remova a categoria "action" do filme Batman .

  Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"adventure",
		"superhero",
		"villain",
		"comic-based"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}

```

Solução: [desafio3.js](./desafio3.js)

<hr>

### 4) Remova o primeiro elemento do array category do filme Batman.

  Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain",
		"comic-based"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}
```

Solução: [desafio4.js](./desafio4.js)

<hr>

### 5) Remova o último elemento do array category do filme Batman.

  Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}
```

Solução: [desafio5.js](./desafio5.js)

<hr>

### 6) Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.

  Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain",
		"action"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}

```

Solução: [desafio6.js](./desafio6.js)

<hr>

### 7) Adicione a categoria "90's" aos filmes Batman e Home Alone .

  Após a execução do método .find().pretty() , o resultado do filme Batman e do filme Home Alone será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain",
		"action",
		"90's"
	],
	"imdbRating" : 7.7,
	"budget" : 35
}

{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84e"),
	"title" : "Home Alone",
	"category" : [
		"family",
		"comedy",
		"90's"
	],
	"imdbRating" : 7.4
}

```

Solução: [desafio7.js](./desafio7.js)

<hr>

### 8) Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
``` javascript
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```


  Após a execução do método .find().pretty() , o resultado do filme Home Alone será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84e"),
	"title" : "Home Alone",
	"category" : [
		"family",
		"comedy",
		"90's"
	],
	"imdbRating" : 7.4,
	"cast" : [
		{
			"actor" : "Macaulay Culkin",
			"character" : "Kevin"
		},
		{
			"actor" : "Joe Pesci",
			"character" : "Harry"
		},
		{
			"actor" : "Daniel Stern"
		}
	]
}

```
Solução: [desafio8.js](./desafio8.js)

<hr>

### 9) Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .
Dica : Para isso, leia aqui sobre o operador $ .

  Após a execução do método .find().pretty() , o resultado do filme Home Alone será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84e"),
	"title" : "Home Alone",
	"category" : [
		"family",
		"comedy",
		"90's"
	],
	"imdbRating" : 7.4,
	"cast" : [
		{
			"actor" : "Macaulay Culkin",
			"character" : "Kevin"
		},
		{
			"actor" : "Joe Pesci",
			"character" : "Harry"
		},
		{
			"actor" : "Daniel Stern",
			"character" : "Marv"
		}
	]
}

```
<hr>

### 10) Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
``` javascript
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}

```
  Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:


``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain",
		"action",
		"90's"
	],
	"imdbRating" : 7.7,
	"budget" : 35,
	"cast" : [
		{
			"character" : "Batman"
		},
		{
			"character" : "Alfred"
		},
		{
			"character" : "Coringa"
		}
	]
}

```

Solução: [desafio10.js](./desafio10.js)

<hr>

### 11: Produza três querys para o filme Batman :

- Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;

- Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred ;

- Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa .
Dica : Para isso, [leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador $ .

 
 Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain",
		"action",
		"90's"
	],
	"imdbRating" : 7.7,
	"budget" : 35,
	"cast" : [
		{
			"character" : "Batman",
			"actor" : [
				"Christian Bale"
			]
		},
		{
			"character" : "Alfred",
			"actor" : [
				"Michael Caine"
			]
		},
		{
			"character" : "Coringa",
			"actor" : [
				"Heath Ledger"
			]
		}
	]
}


```
<hr>

### 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array em ordem alfabética.

Dica : Para isso, [leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador $ .

Após a execução do método .find().pretty() , o resultado do filme Batman será parecido com o código abaixo:

``` javascript
{
	"_id" : ObjectId("6092e43cc4b537a5a1a0f84c"),
	"title" : "Batman",
	"category" : [
		"superhero",
		"villain",
		"action",
		"90's"
	],
	"imdbRating" : 7.7,
	"budget" : 35,
	"cast" : [
		{
			"character" : "Batman",
			"actor" : [
				"Christian Bale",
				"George Clooney",
				"Michael Keaton",
				"Val Kilmer"
			]
		},
		{
			"character" : "Alfred",
			"actor" : [
				"Michael Caine"
			]
		},
		{
			"character" : "Coringa",
			"actor" : [
				"Heath Ledger"
			]
		}
	]
}
```
<hr>

**_<div align="right">Douglas Cajueiro - 05/05/2021 </div>_**
