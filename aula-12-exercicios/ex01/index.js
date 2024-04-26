/***### Exercícios de escrita de cídigo

#### 1. Escreva as funções explicadas abaixo:

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

`Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.`

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o `template`:

`Eu sou [NOME], tenho [IDADE] anos, moro em [CIDADE] e sou [PROFISSÃO].`

**Dica:** na hora de criar a frase, você pode utilizar as template strings que vimos na aula anterior! As variáveis da frase, nesse caso, serão os próprios parâmetros recebidos na função.
***/


// A
function info (){
    dados1 =(`Eu sou Axel, tenho 28 anos, moro em São Leopoldo e sou estudante`)
    return dados1
}
console.log(info())

//B
const nome = prompt('Qual é o seu nome?')
const idade = Number(prompt('Qual é a sua idade?'))
const cidade = prompt('Onde você mora?')
const profissao = prompt('Qual a sua profissão?')

function infos (){
    const informaçao = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    return informaçao
}
console.log(infos())