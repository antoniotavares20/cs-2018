//propiedade 3025

function propriedade3025(abcd) {
    // se nao satisfaz exigencia gera excecao

    let ab = doisPrimeirosDigitos(abcd);
    let cd = doisUltimosDigitos(abcd);

    return (ab + cd) * (ab + cd) == abcd;
}

let doisPrimeirosDigitos = x => Math.trunc(n / 100);
let doisUltimosDigitos = x => n % 100;
