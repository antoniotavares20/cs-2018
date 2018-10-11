/**Operações básicas com a classe matemática 
 * 
 * <p> Esta classe também ilustra o uso do 
 * <a href="http://usejsdoc.org/">JSDoc</a>.</p>
 * 
 * @type {module.Matematica}
*/
class Matematica {

/**
 * Produz a soma de um dos argumentos fornecidos
 *@param{number} a Um dos argumentos
 *@param{number} b outro argumento
 *
 * @see(@link Matematica#soma)
 * 
 * @returns {number} A soma de argumentos.
 * 
 * 
 */

soma(a,b){
    return a + b;
 }
/**
 * Produz a subtração de do primeiro e segundo argumento
 * @param {nunber} a um dos argumentos;
 * @param {nubmer} b outro argumento;
 * 
 * @see{@link Matematica #subtracao}
 * 
 * @returns {number} O resultado da soma (a - b).
 */
subtracao(a,b){
    return a - b;
}    
}

module.exports = Matematica;
