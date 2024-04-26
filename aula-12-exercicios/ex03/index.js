/***### Exercícios de escrita de cídigo

#### 3. Crie uma função:

Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inseridos pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

Exemplo:
```
Números inseridos: 30 e 3
--
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
```

**Dica:** lembre-se de converter a entrada do usuário para número antes de fazer os cálculos.
***/
const n1 = prompt('Digite um número')
const n2 = prompt('Digite um segundo número')

console.log(`Números ${n1} e ${n2}`)

//Adição
function soma (a, b){
    const adicao = Number(a) + Number(b)
    return adicao
}
console.log('Adição: ',soma(n1, n2))

//Subtração
function subtracao (a, b){
    const diminuicao = Number(a) - Number(b)
    return diminuicao
}
console.log('Subtração: ',subtracao(n1, n2))

//Multiplicação
function multiplicacao (a, b){
    const vezes = Number(a) * Number(b)
    return vezes
}
console.log('Multiplicação: ',multiplicacao(n1, n2))

//Divisão
function divisao (a, b){
    const dividir = Number(a) / Number(b)
    return dividir
}
console.log('Divisão:', divisao(n1, n2))