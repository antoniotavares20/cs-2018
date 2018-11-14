const somaNaturais = require("../Algoritmo5");
/**Esta função faz o teste do Algoritmo5
 * 
 */
test("Somatorio de todos os valores de 2", () => {
    expect(somaNaturais.somaNaturais(2)).toBe(3);
});


test("Somatorio de todos os valores de 3", () => {
    expect(somaNaturais.somaNaturais(3)).toBe(6);
});
test("Somatorio de todos os valores de 2", () => {
    expect(somaNaturais.somaNaturais(4)).toBe(10);
});
test("Somatorio de todos os valores de 2", () => {
    expect(somaNaturais.somaNaturais(5)).toBe(15);
});