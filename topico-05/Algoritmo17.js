/**Esta função faz a regra de Horner para avaliação de polinomio
 * @param {int} x inteiro
 * @param {int} g inteiro positivo
 * @param {int} a array de valores inteiros 
 */
var horner = function (x, g, a) {

    if (g <= 1) {
        return false;
    }
    p = [g];
    i = g - 1;
    while (0 <= i) {
        p = p * x + a[i];
        i = i - 1
    }
    return p;
}
module.exports.horner = horner;