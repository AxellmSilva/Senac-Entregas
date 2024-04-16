let nome
let idade

console.log(typeof nome, typeof idade)
// undefined foi impresso porque não foi atribuído nenhum valor.

nome = prompt('Qual é o seu nome?')
idade = prompt('QUal é a sua idade?')

console.log(typeof nome, typeof idade)
// Os dois typeof passaram de 2 undefined para 2 strings.

console.log('Olá',nome, 'você tem', idade,'anos.')