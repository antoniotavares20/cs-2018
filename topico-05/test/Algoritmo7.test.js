const produtoDeInt = require("../Algoritmo7");
/**Esta função faz o teste do Algoritmo7
 * 
 */
test("A = 0 retorno = falso", () => {
    expect(produtoDeInt.totalParcelas(0, 1)).toBe(false);
})

test("B = 0 retorno = falso", () => {
    expect(produtoDeInt.totalParcelas(1, 0)).toBe(false);
})

test("6(seis) parcelas para o total de 7(sete) parecela retorna 42", () => {
    expect(produtoDeInt.totalParcelas(6, 7)).toBe(42);
})


test("4(quatro) parcelas para o total de 2(dois) parecela retorna 42", () => {
    expect(produtoDeInt.totalParcelas(4, 2)).toBe(8);
})