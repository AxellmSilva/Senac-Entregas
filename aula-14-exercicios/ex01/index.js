/*
### Exercícios de escrita de código

#### 1. Resolva os passos a seguir

a) Crie um objeto. Ele deve conter duas propriedades: nome (`string`) e apelidos (um `array` que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um `objeto` e imprime uma mensagem no modelo abaixo: 

```
// Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: [ "Vitinho", "Vitão", "Vit" ]
}

// Exemplo de saída
// "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
```
**Dica:** não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

b) Agora, usando o operador `spread`, crie um novo `objeto` mantendo o valor da propriedade `nome`, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como `argumento` o novo `objeto`.
*/

function minhaFuncao (pessoa){
   console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

const pessoa1 = {
   nome: 'Caio',
   apelidos: ['caca', 'kaioken','caiu']
}

const pessoa2 = {
   ...pessoa1,
   apelidos: ['cacau', 'suco de uva', 'ioio']
}
minhaFuncao(pessoa1)
minhaFuncao(pessoa2)
