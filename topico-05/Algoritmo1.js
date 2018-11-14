/**Esta função estabelece uma sequencia numerica de 4(quatro) digitos 
 * segundo a propriedade 3025, onde o quadrado da soma dos dois primeiros numeros
 * com os dois ultimos, equivale ao propio valor por exemplo,
 * 30+25 = 55 e 55 ao quadrado = a 3025 .
 * @param {int} para os dois primeiros numeros(milhar e centena) ;
 * @param {int} dois ultimos numeros (numeral e decimal)
 * @param {float} valida se o numero faz parte ou não desta propriedade;
 */

function propriedade3025(abcd) {
    let ab = doisPrimeirosDigitos(abcd);
    let cd = doisUltimosDigitos(abcd);
    return (ab + cd) * (ab + cd) == abcd;
}

let doisPrimeirosDigitos = abcd => Math.trunc(abcd / 100);
let doisUltimosDigitos = abcd => abcd % 100;

exports.propriedade3025 = propriedade3025;
