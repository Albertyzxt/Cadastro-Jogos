const prompt = require("prompt-sync")();

const jogos = [];

const validarIndice = (indice) => indice >= 0 && indice < jogos.length;

const modelo = () => {
  const nome = prompt("Digite o nome do jogo: ");
  const estudio = prompt("Digite o nome da empresa fundadora: ");
  const anoLancamento = prompt("Digite o ano de lançamento: ");
  const preco = prompt("Digite o preço do jogo: ");
  const duracao = prompt("Digite a duração do jogo: ");
  let sequencia = -1;
  if (!read()) {
    sequencia = prompt(
      "Qual a sequência do jogo? Digite '0' se não houver" - 1
    );
  }

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
    ((sequencia >= -1 && sequencia < jogos.length) || jogos.length == 0)
  ) {
    return {
      nome,
      estudio,
      anoLancamento,
      preco,
      duracao,
      sequencia,
    };
  } else {
    console.log("Dados inválidos");
  }
};

const create = () => {
  const jogo = modelo();

  if (jogo != undefined) {
    jogos.push(jogo);
    console.log("Jogo criado com sucesso! ");
  }
};

const read = () => {
  if (jogos.length == 0) {
    console.log("Nenhum jogo cadastrado");
    return false;
  } else {
    jogos.forEach((jogo, indice) => {
      console.log(`
        ${indice + 1}.
         Nome: ${jogo.nome}
         Estudio: ${jogo.estudio}
         Ano de Lançamento: ${jogo.anoLancamento}
         Preço: ${jogo.preco}
         Duração: ${jogo.duracao}
         Sequência: ${jogo.sequencia}
        `);
    });
    return true;
  }
};

const update = () => {
  if (!read()) {
    return;
  }

  const indice = prompt("Qual o indice que deseja atualizar? " - 1);

  const jogo = modelo();

  if (jogo != undefined && validarIndice(indice)) {
    jogos[indice] = jogo;
    console.log("Jogo atualizado com sucesso!");
  } else {
    console.log("indice inválido!");
  }
};

const del = () => {
  if (!read()) {
    return;
  }

  const indice = prompt("Qual o indice que deseja remover? " - 1);
  if (validarIndice(indice)) {
    jogos.splice(indice, 1);
    console.log("Jogo removido com sucesso!");
  } else {
    console.log("Indice inválido");
  }
};
const functions = {
  create,
  read,
  update,
  del,
};
module.exports = functions;
