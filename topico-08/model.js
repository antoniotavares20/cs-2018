/**Model */
const FREQUENCIA = 15;
var hora = 0;
var minuto = 0;
var segundo = FREQUENCIA;
var intervalo = { hora, minuto, segundo };
var tempo;

/**Esta função recebe os intervalos de 
 * data hora e tempo para validar a progressão 
 * temporal de acordo com os padrões existentes
 * para a hora, minuto e segundo
 * @param {object} intervalo = {hora, minuto, segundo} 
 */
function regrasTempo() {
  if (intervalo.segundo == 60) {
    intervalo.minuto++;
    intervalo.segundo = 0;
  }
  if (intervalo.minuto == 60) {
    intervalo.hora++;
    intervalo.segundo = 0;
    intervalo.minuto = 0;
  }
  intervalo.segundo++;
  return intervalo;
}
/** Esta função trata as regras para contagem regressiva
 * do tempo fazendo o temporizador retroceder;
 * @param {void}
 **/
function regrasContagemRegressiva() {
  if(intervalo.segundo <= 0){
    if(intervalo.segundo == 0){
      parar();
  } 
  intervalo.segundo = 15;
 
}
 

  if (intervalo.minuto == 60) {
    intervalo.hora--;
    intervalo.segundo = 0;
    intervalo.minuto = 0;
  }
  if (intervalo.segundo == 60) {
    intervalo.minuto--;
    intervalo.segundo = 0;
  }
  intervalo.segundo--;
  return intervalo;
}
/**Esta função zera os valores contidos no 
 * itervalo
 * @param {object} intervalo = {hora, minuto, segundo} 
 */
function limparTempo(intervalo) {
  intervalo.segundo = 0;
  intervalo.hora = 0;
  intervalo.minuto = 0;
}

/**View */

/** Esta função faz a manipulação de objetos
 * nas tags ID para atualizar o tempo no DOM
 * atualizando o tempo no "cronometro.html" 
 * @param {*} intervalo 
 */
function escreverTempo(intervalo) {
  if (intervalo.segundo < 10) {
    console.log(intervalo.segundo);
    document.getElementById("segundo").innerHTML = intervalo.segundo;
  } else document.getElementById("segundo").innerHTML = intervalo.segundo;
  if (intervalo.minuto < 10) {
    document.getElementById("minuto").innerHTML = "0" + intervalo.minuto;
  } else document.getElementById("minuto").innerHTML = intervalo.minuto;
  if (intervalo.hora < 10) {
    document.getElementById("hora").innerHTML = "0" + intervalo.hora;
  } else document.getElementById("hora").innerHTML = intervalo.hora;
}

/**Controller Suport*/
/**Esta de acordo com as regras do tempo e
 * envia o tempo atual para a função escrever
 * tempo. 
 */
function atualizarTempo() {
  intervalo = regrasTempo(intervalo);
  escreverTempo(intervalo);
}
/**Esta função inicializa a contagem regressiva para 
 * retroceder o tempo e envia parar o tempo marcado 
 * para a função escrever tempo;
 */
function contagemRegressiva() {
  intervalo = regrasContagemRegressiva(intervalo);
  escreverTempo(intervalo);
}
/**Esta função iniciar o camando por meio do protocolo
 * setInterval, a contagem dos segundos
 */
function iniciar() {
  console.log("iniciar");
  parar();
  tempo = setInterval(atualizarTempo, 1000);
}
/**Esta função realiza a parada do protocolo interval;*/
function parar() {
  console.log("parar");
  clearInterval(this.tempo);
}
/**Esta função inverte a contagem do tempo*/
function retroceder() {
  console.log("iniciar contagem regressiva");
  parar();
  this.tempo = setInterval(contagemRegressiva, 1000);
}
/**esta função limpa os valores do cronmetro atual */
function limpar() {
  limparTempo(this.intervalo);
  escreverTempo(this.intervalo);
}

function maisTempo(){
  this.intervalo.segundo+=2;
}
/**Controler-io */
/**As função abaixo, escultam os eventos da DOM e
 * execultam as funções de controle as elas vinculadas
 */
window.addEventListener("load", function load(event) {
  var createButton = document.getElementById(["iniciar"]);
  createButton.addEventListener("click", function() {
    iniciar();
  });
});

window.addEventListener("load", function load(event) {
  var createButton = document.getElementById(["parar"]);
  createButton.addEventListener("click", function() {
    parar();
  });
});

window.addEventListener("load", function load(event) {
  var createButton = document.getElementById(["limpar"]);
  createButton.addEventListener("click", function() {
    limpar();
  });
});

window.addEventListener("load", function load(event) {
  var createButton = document.getElementById(["retroceder"]);
  createButton.addEventListener("click", function() {
    retroceder();
  });
});


window.addEventListener("load", function load(event) {
  var createButton = document.getElementById(["maistempo"]);
  createButton.addEventListener("click", function() {
    maisTempo();
  });
});
