//Crie um **array** vazio e guarde-o em uma variável, chamada `listaDeTarefas`.
let listaDeTarefas = []
//Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no **array**.
const tarefa1 = prompt('Digite tafera 1')
const tarefa2 = prompt('Digite tafera 2')
const tarefa3 = prompt('Digite tafera 3')
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
//Imprima o **array** no console.
console.log(listaDeTarefas)
//Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2.
let i = Number(prompt('Digite um numero de 1 a 3 correspondente a tarefa que já realizou.'))
i = i - 1
//Remova da lista o item do **índice** que o usuário escolheu.
listaDeTarefas.splice(i, 1)
//Imprima o **array** no console
console.log(listaDeTarefas)