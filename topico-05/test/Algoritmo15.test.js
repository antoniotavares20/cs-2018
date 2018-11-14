const crivoEratosten = require("../Algoritmo15");
/**Esta função faz o teste do Algoritmo15
 * @param {crivoEratosten(array,tamanho)}
 * 
 */
test("Verficação de condição minima", () => {
    expect(crivoEratosten.crivoEratosten([2, 3, 4], 100)).toBe(false);

});


test("Verficação de condição minima", () => {
    expect(crivoEratosten.crivoEratosten([-2, 3, 4], 100)).toBe(false);

});

test("Verficação de condição minima", () => {
    expect(crivoEratosten.crivoEratosten([100,100, 100], 100)).toBe(false);

});