(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

function soma(x,y){
    return x+y;
}
module.exports.soma = soma;

function subtracao(x,y){
    return x-y+1;
}
module.exports.subtracao = subtracao;

},{}],2:[function(require,module,exports){
const operacao = require("../calculator");
//teste:
QUnit.test("soma trivial", function (assert){
//execulta a operação que desejamos testar
    let resultado = operacao.soma(3, -1);
    //verifica se o resultado produzido é o esperado
    assert.equal(resultado, 2, "soma incorreta");
})

 QUnit.test("subtracao trivial", function(assert){
    let resultado = operacao.subtracao(1,2);
    assert.equal(resultado, -1 , "correto!" )

})


},{"../calculator":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9jYWxjdWxhdG9yLmpzIiwidGVzdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmZ1bmN0aW9uIHNvbWEoeCx5KXtcclxuICAgIHJldHVybiB4K3k7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMuc29tYSA9IHNvbWE7XHJcblxyXG5mdW5jdGlvbiBzdWJ0cmFjYW8oeCx5KXtcclxuICAgIHJldHVybiB4LXkrMTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cy5zdWJ0cmFjYW8gPSBzdWJ0cmFjYW87XHJcbiIsImNvbnN0IG9wZXJhY2FvID0gcmVxdWlyZShcIi4uL2NhbGN1bGF0b3JcIik7XHJcbi8vdGVzdGU6XHJcblFVbml0LnRlc3QoXCJzb21hIHRyaXZpYWxcIiwgZnVuY3Rpb24gKGFzc2VydCl7XHJcbi8vZXhlY3VsdGEgYSBvcGVyYcOnw6NvIHF1ZSBkZXNlamFtb3MgdGVzdGFyXHJcbiAgICBsZXQgcmVzdWx0YWRvID0gb3BlcmFjYW8uc29tYSgzLCAtMSk7XHJcbiAgICAvL3ZlcmlmaWNhIHNlIG8gcmVzdWx0YWRvIHByb2R1emlkbyDDqSBvIGVzcGVyYWRvXHJcbiAgICBhc3NlcnQuZXF1YWwocmVzdWx0YWRvLCAyLCBcInNvbWEgaW5jb3JyZXRhXCIpO1xyXG59KVxyXG5cclxuIFFVbml0LnRlc3QoXCJzdWJ0cmFjYW8gdHJpdmlhbFwiLCBmdW5jdGlvbihhc3NlcnQpe1xyXG4gICAgbGV0IHJlc3VsdGFkbyA9IG9wZXJhY2FvLnN1YnRyYWNhbygxLDIpO1xyXG4gICAgYXNzZXJ0LmVxdWFsKHJlc3VsdGFkbywgLTEgLCBcImNvcnJldG8hXCIgKVxyXG5cclxufSlcclxuXHJcbiJdfQ==
