/**Esta função retorna a raiz quadrada de ultizando o metodo babilonico,
 * onde, quanto maior o valor de i (número de iterações), 
 * maior a precizão da raiz do numero
 * @param {int} valorDesejado - para o valor da raiz desejada 
 * @param {int} iteracoes - para o valor de iterações desejado;
 */

var raiz = (valorDesejado, iteracoes) => {
    var raiz = 1;
    if (valorDesejado <= 0) {
        return false;
    } else {
        while (0 <= iteracoes) {
            raiz = (raiz + (valorDesejado / raiz)) / 2;
            iteracoes--;
        }
        return raiz;
    }
}
module.exports.raiz = raiz;
