(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb2RpZ28udGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXHJcbiAqIEVmZXR1YSBhIHNvbWEgZG9zIGFyZ3VtZW50b3MgZm9ybmVjaWRvcy5cclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFByaW1laXJhIHBhcmNlbGFcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgU2VndW5kYSBwYXJjZWxhXHJcbiAqL1xyXG5mdW5jdGlvbiBzb21hKHgsIHkpIHtcclxuICAgIHJldHVybiB4ICsgeTtcclxuICB9XHJcbiAgXHJcbiAgLy8gRXNwZXJhLXNlIHF1ZSBlc3RhIGZ1bsOnw6NvIHNlamEgdXNhZGEgbsOjbyBhcGVuYXMgbmVzdGVcclxuICAvLyBhcnF1aXZvLCBtYXMgdGFtYsOpbSBwb3IgbWVpbyBkZSBjaGFtYWRhcyBjb250aWRhcyBlbVxyXG4gIC8vIG91dHJvcyBhcnF1aXZvcy4gRW0gY29uc2VxdcOqbmNpYSwgZXhwb3J0YW1vc1xyXG4gIC8vIGEgZnVuw6fDo28gcG9yIG1laW8gZGUgXCJleHBvcnRzXCIgYW8gY3JpYXIgdW0gbcOzZHVsby5cclxuICBcclxuICAvLyBtb2R1bGUuZXhwb3J0cyDDqSBhIHJlZmVyw6puY2lhIHBhcmEgbyBvYmpldG8gcmV0b3JuYWRvXHJcbiAgLy8gcG9yIGNoYW1hZGFzIHJlcXVpcmUoKS4gRW0gdmV6IGRhIG9ww6fDo28gYWJhaXhvIMOpIHVzYWRhXHJcbiAgLy8gb3V0cmEgZm9ybWEsIGNvbnNpZGVyYWRhIG1haXMgc2VndXJhIGUgcmVjb21lbmRhZGEuXHJcbiAgLy8gbW9kdWxlLmV4cG9ydHMuc29tYSA9IHNvbWE7XHJcbiAgY29uc29sZS5sb2coXCJwYXNzYW5kbyBubyB0ZXN0ZVwiKVxyXG4gIGV4cG9ydHMuc29tYSA9IHNvbWE7XG59LHt9XX0se30sWzFdKTtcbiJdfQ==
