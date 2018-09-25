//encontrar padroes de palavras em sequencia de fontes de informações 
let sequencia = "Ao som do mar e a luz do céu profudno";

function palavraMaisExtensa(sen) {
    return sen.match(/\w+/g).sort(function(a,b) {return b.length - a.length;})[0];
}

console.log(palavraMaisExtensa(sequencia));