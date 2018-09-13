let idade = 10; 

let maioridade = idade >= 18 ;


let x = "Mensagem";
console.log("x é do tipo " + (typeof x));

x = 9.8;
console.log("x é do tipo " + (typeof x));



// Calculo  fatorial


function fatorial(n) {
   let produto = 2;
   if (n < 2) {
     return 1;
    }

    while (n > 2) {
      produto = produto * n;
      n = n - 1;
    }

    return produto;
}

console.log(fatorial(5));

//calculo fatorial não iterativo

function fatorial(n) {
   let produto = 2;
   if (n < 2) {
     return 1;
    }
    while (n > 2) {
      produto = produto * n;
      n = n - 1;
    }
    return produto;
}

console.log(fatorial(5));


//recursivo 
//função para recursao
function fatorial(n) {
   return n == 0 ? 1 : n * fatorial(n-1);
}

//empregando função aero
const f = n => n == 0 ? 1 : n * f(n-1);

console.log(f(10) == fatorial(10));


//sequencia que retorna a maior palavra

let sequencia = "quem ensina aprende ao ensinar e quem aprende ensina ao aprender";

let pattern = /\w+/g;
let palavras = sequencia.match(pattern);

let maior = -1;
let tamanho = 0;

palavras.forEach(function (c, i) {
    if (c.length > tamanho) {
        tamanho = c.length;
        maior = i;
    }
});

console.log(palavras[maior]);

//utilizando outro tipo de função 

let se = "celular tocando";

function palavraMaisExtensa(se) {
    return sen.match(/\w+/g).sort(function(a,b) {return b.length - a.length;})[0];
}

console.log(palavraMaisExtensa(se)

//precedencia 


function propriedade(seq) {
    var i = seq.length;
    while (i--) {
        if (letra(seq.charAt(i))) {
            if (!asterisco(seq, i - 1) || !asterisco(seq, i + 1)) {
                return false;
            }
        }
    }
    
    return true;
}

function letra(caractere) {
    let supostaLetra = caractere.toString();
    return supostaLetra.length == 1 && supostaLetra.match(/[a-z]/);
}

function asterisco(seq, posicao) {
    if (posicao < 0 || posicao >= seq.length) {
        return false;
    }
    
    return seq.charAt(posicao) == '*';
}

console.log(propriedade("*a*"));
console.log(propriedade("a*"));
console.log(propriedade("*******b*a*"));


//copia

const m = require("moment");
m.locale("pt-BR");
var agora = m(new Date());
console.log(agora.format("LLLL"));
agora.fromNow();
