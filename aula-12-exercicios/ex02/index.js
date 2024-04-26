/***### Exercícios de escrita de cídigo

#### 2. Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
***/

//A
function soma (a, b){
    const adicao = a + b
    return adicao
}
console.log(soma(10, 5))

//B
function maiorOuIgual (a, b){
    const maiorOuIguais = a >= b
    return maiorOuIguais
}
console.log(maiorOuIgual(10, 5))

//C
function parOuImpar (a){
    const par = (a % 2) === 0
    return par
}
console.log(parOuImpar(10))

//D
function mensagem (texto){
    const tamanho = texto.length
    const maiuscula = texto.toUpperCase()

    console.log(tamanho, maiuscula)
}
mensagem('Hoje é dia vinte e seis de abril')