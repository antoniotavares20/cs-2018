
/**
 * Esta função visa verificar se a suma dos digitos de um numero de tres digitos
 * é igual ao valor fornecido.
 * @param {number} cdu inteiro de tres dígitos cujo a propiedade sera verificada.
 * 
*/
function propiedade153(cdu){
    const c = digitoCentena(cdu);
    const d = digitoDezena(cdu);
    const u = digitoUnidade(cdu);    
    return Math.pow(c,3)+Math.pow(d,3)+Math.pow(u,3) === cdu;
}

let digitoCentena = x => Math.trunc(n/100);
let digitoDezena = x=> Math.trunc(n/10);
let digitoUnidade = x => n%10;


