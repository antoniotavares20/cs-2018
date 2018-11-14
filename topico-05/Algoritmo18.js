
/**Esta função realiza a equação de fibonacci
 * @param {int} numero, numero inteiro comum, maior que zero
 * @returns {int} numero de fibonacci
 */
var fibonacci = function (n) {
    if (n <= 0) {
        return false;
    }
    a = 0;
    c = 1;
    if (n == 0 || n == 1) {
        return 0;
    }
    i = 2;
    while (i <= n) {
        t = c;
        c = c + a;
        a = t;
        i++;
    }
    return c;
}
module.exports.fibonacci = fibonacci;