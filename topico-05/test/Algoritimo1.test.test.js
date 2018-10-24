(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//propiedade 3025

let n = 3025;
let x = propiedadeX(n);
let y = propiedadeY(n);

if( (x+y) == Math.sqrt(n)){
    console.log(`é verdadeiro que o numero ${n} atende a propiedade, pois ${x} + ${y} ^2
=  ${(x+y)^2}  e ${x} +${y} = ${x+y}`);
}else{
    console.log("o numero não atende a propiedade")
}
function propiedadeX(n){
    let x = n/100;
    x = Math.trunc(x);
     return x; 
}
function propiedadeY(n){
     let y = n%100;
    return y;
}
},{}]},{},[1]);
