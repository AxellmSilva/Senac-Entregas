

/*b) Escreva uma `função` que receba um `objeto` de cada vez e retorne um `array` com as seguintes informações:

- O valor de `nome`.
- O numero de caracteres do valor `nome`.
- O valor de `idade`.
- O valor de `profissão`.
- O numero de caracteres do valor `profissão`.*/



function minhaFuncao(pessoa){
	let resultado=[]
	resultado = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
	return resultado
}

const pessoa1 = {
	nome: 'josé',
	idade: 23,
	profissao: 'motorista',
}

const pessoa2 = {
	nome: 'João',
	idade: 56,
	profissao: 'médico',
}
console.log(minhaFuncao(pessoa1))
console.log(minhaFuncao(pessoa2))