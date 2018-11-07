//propiedade 3025

function propriedade3025(abcd) {
    // se nao satisfaz exigencia gera excecao

    let ab = doisPrimeirosDigitos(abcd);
    let cd = doisUltimosDigitos(abcd);

    return (ab + cd) * (ab + cd) == abcd;
}

let doisPrimeirosDigitos = abcd => Math.trunc(abcd / 100);
let doisUltimosDigitos = abcd => abcd % 100;

exports.propriedade3025 = propriedade3025;
