let turno = prompt("digite o turno o aluno estuda (M, V, N)").toUpperCase()
switch (turno){
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Boa aula!")
}