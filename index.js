const prompt = require("prompt-sync")();

const { modelo, create, read, update, del } = require("./jogo.js");

const menuJogo = () => {
  while (true) {
    console.log(`
      === Menu dos Jogos ===
      1. Adicionar um novo Jogo
      2. Listar os Jogos
      3. Atualizar um Jogo existente
      4. Deletar um Jogo
      0. Sair
      `);

    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        create();
        break;
      case "2":
        read();
        break;
      case "3":
        update();
        break;
      case "4":
        del();
        break;
      case "0":
        console.log("Saindo da biblioteca, até mais!");
        return;
      default:
        console.log("Você deve selecionar um número do menu.");
        return;
    }
  }
};

menuJogo();
