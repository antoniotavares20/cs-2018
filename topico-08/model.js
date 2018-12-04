/**Model */
const FREQUENCIA = -1;
var hora = 0;
var minuto = 0;
var segundo = FREQUENCIA;
var intervalo = { hora, minuto, segundo };

function regrasTempo(intervalo) {
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

function regrasContagemRegressiva() {
	intervalo.hora = 1;
	intervalo.minuto = 15;
  if (intervalo.minuto == 60) {
    intervalo.hora--;
    intervalo.segundo = 0;
    intervalo.minuto = 0;
  }
  if (intervalo.segundo == 0) {
    intervalo.minuto--;
    intervalo.segundo = 59;
  }
  intervalo.segundo--;
  return intervalo;
}

function limparTempo(intervalo) {
  intervalo.segundo = 0;
  intervalo.hora = 0;
  intervalo.minuto = 0;
}

/**View */
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

function atualizarTempo() {
  intervalo = regrasTempo(intervalo);
  escreverTempo(intervalo);
}

function contagemRegressiva() {
  intervalo = regrasContagemRegressiva(intervalo);
  escreverTempo(intervalo);
}

var tempo;
function iniciar() {
  console.log("iniciar");
  parar();
  tempo = setInterval(atualizarTempo, 1000);
}

function parar() {
  console.log("parar");
  clearInterval(this.tempo);
}

function retroceder() {
  console.log("iniciar contagem regressiva");
  parar(); 
  limpar();	
  this.tempo = setInterval(contagemRegressiva, 1000);
}

function limpar() {
  limparTempo(this.intervalo);
  escreverTempo(this.intervalo);
}

/**Controler-io */

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
