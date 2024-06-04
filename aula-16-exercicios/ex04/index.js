/*Considere a situação: Você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso custar menos de 15 reais.

Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.

Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(". */

/*const generoFilme = prompt("Qual o gênero do filme que você vai assistir").toUpperCase()
const precoFilme = Number(prompt("Qual o preço do filme?"))
if(generoFilme === "FANTASIA"){
    if(precoFilme <= 15){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme")
    }

}else{
    console.log("Escolha outro filme")
}*/


const generoFilme = prompt("Qual o gênero do filme que você vai assistir").toUpperCase()
const precoFilme = Number(prompt("Qual o preço do filme?"))
const precoMaximo = 15
if(generoFilme === "FANTASIA" && precoFilme <= precoMaximo){
    console.log("Bom filme.")
}else{
    console.log("Escolha outro filme")
}