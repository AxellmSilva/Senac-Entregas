const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Digite um segundo número: '))

const div1 = n1 % n2 
const div2 = n2 % n1
const resultDiv1 = div1 === 0
const resultDiv2 = div2 === 0

console.log('O primeiro número é maior que segundo?', n1 > n2)
console.log('O primeiro número é igual ao segundo?', n1 === n2)
console.log('O primeiro número é divisível pelo segundo?', resultDiv1)
console.log('O segundo número é divisível pelo primeiro?', resultDiv2)