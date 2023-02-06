var listaJogadores = [];

function adicionarJogador() {
  var jogador = {
    nome: " ",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  var emoji = document.getElementById("emoji").value;
  jogador.nome = document.getElementById("nomeJogador").value;
  listaJogadores.push(jogador);
  exibirTabela(listaJogadores);
  limparCampo();
}

function exibirTabela() {
  var elementoTabela = document.getElementById("tabelaJogadores");
  elementoTabela.innerHTML = null;

  for (var i = 0; i < listaJogadores.length; i++) {
    tabelaHtml(listaJogadores, elementoTabela, i);
  }
}

function tabelaHtml(listaJogadores, elementoTabela, i) {
  elementoTabela.innerHTML += `
        <tr>
          <td>${listaJogadores[i].nome}</td>
          <td>${listaJogadores[i].vitoria}</td>
          <td>${listaJogadores[i].empate}</td>
          <td>${listaJogadores[i].derrota}</td>
          <td>${listaJogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate()">Empate</button></td>
          <td><button id="exclui" title="Clique para remover o jogador." onClick="removerJogador(${i})">X</button></td>
        </tr>
   `;
}

function limparCampo() {
  document.getElementById("nomeJogador").value = null;
}

function zerarPontuacao() {
  var i = 0;
  while (listaJogadores.length > i) {
    listaJogadores[i].vitoria = 0;
    listaJogadores[i].empate = 0;
    listaJogadores[i].derrota = 0;
    listaJogadores[i].pontos = 0;
    i++;
  }
  exibirTabela();
}

function removerJogador(i) {
  listaJogadores.splice(i, 1);
  exibirTabela();
}

function adicionarVitoria(jogador) {
  var i = 0;
  while (listaJogadores.length > i) {
    listaJogadores[i].derrota++;
    i++;
  }
  listaJogadores[jogador].vitoria++;
  listaJogadores[jogador].pontos += 3;
  listaJogadores[jogador].derrota--;
  exibirTabela(listaJogadores);
}

function adicionarEmpate() {
  var i = 0;
  while (listaJogadores.length > i) {
    listaJogadores[i].empate++;
    listaJogadores[i].pontos++;
    i++;
  }

  exibirTabela();
}

function adicionarDerrota(jogador) {
  listaJogadores[i].derrota++;
  exibirTabela();
}