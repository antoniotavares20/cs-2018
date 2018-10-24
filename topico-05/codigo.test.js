(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Efetua a soma dos argumentos fornecidos.
 * 
 * @param {number} x Primeira parcela
 * @param {number} y Segunda parcela
 */
function soma(x, y) {
    return x + y;
  }
  
  // Espera-se que esta função seja usada não apenas neste
  // arquivo, mas também por meio de chamadas contidas em
  // outros arquivos. Em consequência, exportamos
  // a função por meio de "exports" ao criar um módulo.
  
  // module.exports é a referência para o objeto retornado
  // por chamadas require(). Em vez da opção abaixo é usada
  // outra forma, considerada mais segura e recomendada.
  // module.exports.soma = soma;
  console.log("passando no teste")
  exports.soma = soma;
},{}]},{},[1]);
