var numSecreto = parseInt(Math.random() * 1000) + 1;
var maxTentativa = 15;
var qtdTentativa = 0;

//  alert('Bem vindo(a)! Advinhe um número secreto entre 1 e 1000\nVocê tem apenas 15 tentativas, boa sorte!');
//mensagem = Digite um número entre 1 e 1000
exibeMensagem();

function adivinha() {
  while (qtdTentativa > 0) {
    mensagem.innerHTML = "Digite um número entre 1 e 1000";
    var numInserido = document.getElementById("numero").value;
    limparCampo();
    if (numInserido == numSecreto) {
      maxTentativa -= 1;
      qtdTentativa += 1;
      alert("VOCÊ GANHOU!");
      alert(
        "O número " +
          numInserido +
          " é o número secreto!\nVocê tentou: " +
          qtdTentativa +
          " vezes"
      );
      return;
    } else if (numSecreto > numInserido) {
      maxTentativa -= 1;
      qtdTentativa += 1;
      alert(
        "Errou!O número secreto é maior do que " +
          numInserido +
          "\nVocê tem: " +
          maxTentativa +
          " tentativas restantes!"
      );
      return;
    } else if (numSecreto < numInserido) {
      maxTentativa -= 1;
      qtdTentativa += 1;

      alert(
        "Errou!\nO número secreto é menor do que " +
          numInserido +
          "\nVocê tem: " +
          maxTentativa +
          " tentativas restantes!"
      );
      return;
    }

    if (maxTentativa == 0) {
      alert("FIM DE JOGO!");
      alert("O seu número de tentativas máximas zerou!");

      break;
    }
  }
}

function limparCampo() {
  document.getElementById("numero").value = null;
}

function exibeMensagem() {
  var mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = null;
  mensagem.innerHTML =
    " Bem vindo(a)! Advinhe um número secreto entre 1 e 1000 <p>Você tem apenas 15 tentativas, boa sorte!</p>";
}
