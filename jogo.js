const prompt = require("prompt-sync")();

const jogos = [];

function create() {
  const nome = prompt("Digite o nome do jogo: ");
  const estudio = prompt("Digite o nome da empresa fundadora: ");
  const anoLancamento = prompt("Digite o ano de lançamento: ");
  const preco = prompt("Digite o preço do jogo: ");
  const duracao = prompt("Digite a duração do jogo: ");
  const sequencia = prompt("Qual a sequência do jogo?");

  if (
    nome != "" &&
    isNaN(preco) &&
    preco == 0 &&
    isNaN(anoLancamento) &&
    anoLancamento < 2024 &&
    anoLancamento > 1962 &&
    isNaN(duracao) &&
    duracao > 0 &&
    estudio != "" &&
    ((sequencia > 0 && sequencia < jogos.length) || jogos.length == 0)
  ) {
    jogos.push({
      nome,
      estudio,
      anoLancamento,
      preco,
      duracao,
      sequencia,
    });
    console.log("Jogo criado com sucesso! ");
  } else {
    console.log("Dados inválidos");
  }
}