var valorEmBit = 4;
var cotacaoDoBit = 21204.97;
var cotacaoDoEuro = 5.55;
var nomeUser = "Beatriz";

var valorEmEuro = valorEmBit * cotacaoDoBit;
var valorEmReais = valorEmEuro * cotacaoDoEuro;

valorEmEuro = valorEmEuro.toFixed([2]);
valorEmReais = valorEmReais.toFixed([2]);

alert(
  "Olá," +
    nomeUser +
    "! Este é o conversor de Bitcoin para Euro, e de Euro para Reais:"
);
alert(
  valorEmBit +
    " Bitcoin = " +
    valorEmEuro +
    " Euro = " +
    valorEmReais +
    " Reais"
);