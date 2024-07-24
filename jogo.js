const prompt = require("prompt-sync")();

let jogos = [];

function create(){
    let nome = prompt("Digite o nome do jogo: ")

    let empresa = prompt("Digite o nome da empresa fundadora: ")

    let anoLanc = prompt("Digite o ano de lançamento: ")
    
    if (isNaN(anoLanc) || anoLanc > 2024 || anoLanc < 1962 || anoLanc != parseInt){
        return console.log("Você deve digitar um ano válido!")
    }
    
    let 
}