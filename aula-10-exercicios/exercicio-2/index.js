//Contenha um **array** com 5 das suas comidas preferidas, armazenado em uma variável.
let array = ['Churrasco', 'Polenta', 'Carreteiro', 'Xis', 'feijoada']

//Imprima no console o **array** completo.
console.log(array)

//Imprima no console a mensagem "Essas são as minhas comidas preferidas:" seguida por cada uma das comidas, uma embaixo da outra.
console.log('Essas são as minhas comidas preferidas: ')
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//**Desafio:** pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela resposta do usuário e imprima no console a nova lista.
const comidaFav = prompt ('Qual a sua comida favorita?')
array.splice(1, 1, comidaFav)
console.log(array)
