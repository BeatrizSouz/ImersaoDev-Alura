var nomeFilme;
var trailer;
var filme;
var listaFilmes=[];
var listaNomes=[];
var listaTrailer=[];


///aqui eu add o filme em uma lista que mais tarde será exibida 
function adicionarFilme() {
  filme = document.getElementById('filme').value;
  nomeFilme = document.getElementById('nomeFilme').value;
  trailer = document.getElementById('trailerFilme').value;
  
   if(verificaCampo(filme,nomeFilme,trailer)){
      alert("Preencha todos os campos!")
    }else if( verificaImg(filme)){
              alert("O elemento inserido não foi reconhecido como imagem")
              limparCampo();
      }else if(verificaSeExiste(nomeFilme,filme) ){
               alert("O filme "+nomeFilme+" já existe na lista, tente outro!")
               limparCampo();
        }else{
              alert("O filme foi adicionado!")
              listaFilmes.push(filme);
              listaNomes.push(nomeFilme);
              listaTrailer.push(trailer);
              limparCampo();
        }
  
     
   
} 
function verificaCampo(filme,nomeFilme,trailer){
  var verifica = false;
  if(filme === ''|| nomeFilme == '' || trailer == ''){
     verifica = true;
  }
  return verifica;
}
function exibirListaFilme(){
  var i = 0;
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = null
  while(listaFilmes.length>i){   
        
      elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<figure> <button id="exclui" title="Clique para excluir o filme da lista." onClick="removerFilme('+i+')">X</button> <a target=_blank href='+listaTrailer[i]+'>  <img src='+listaFilmes[i]+'> </a><figcaption>'+listaNomes[i]+'</figcaption> </figure>'


      i++;

  }  
  
}
function removerFilme(i){
  listaTrailer.splice(i,1);
  listaFilmes.splice(i,1);
  listaNomes.splice(i,1);
  exibirListaFilme()
  
}
function limparCampo(){
  document.getElementById('filme').value = null;
  document.getElementById('nomeFilme').value = null;
  document.getElementById('trailerFilme').value = null;
  
}

function verificaSeExiste(nomeFilme,filme){
  var verifica = false;
  for(var ind = 0; ind < listaFilmes.length; ind++){
      if(filme == listaFilmes[ind]||nomeFilme ==  listaNomes[ind]){
         return verifica = true;
      }
  }
  return verifica;
}

function verificaImg(filme){
    var verifica = true;
    if(filme.endsWith("jpg") || filme.endsWith("jpeg")){
      verifica = false;
    }
  return verifica;
}