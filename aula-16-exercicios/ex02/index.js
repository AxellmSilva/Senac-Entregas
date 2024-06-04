let turno = prompt("digite o turno o aluno estuda (M, V, N)").toUpperCase()
if (turno === "M"){
    console.log("Bom dia!")
}else if(turno === "V"){
    console.log("Boa tarde!")
}else if (turno === "N"){
    console.log("Boa noite!")
}else{
    console.log("Boa aula!")
}