const cpf = require('../Algoritmo19');
/**Esta função faz o teste do Algoritmo19
 * 
 */

test("Verificando paramentos do CPF", () => {
    expect(cpf.cpf(null)).toBe(false);
});