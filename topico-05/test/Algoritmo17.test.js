const horner = require('../Algoritmo17');
/**Esta função faz o teste do Algoritmo17
 * 
 */
test("validação numerica", () => {
    expect(horner.horner(0, 0, 0)).toBe(false);
})

test("validação numerica", () => {
    expect(horner.horner(-100, -50, 50)).toBe(false);
})


test("validação numerica", () => {
    expect(horner.horner(2, 4, [1, 2, 3, 4, 5])).toBe(113);
})
test("validação numerica", () => {
    expect(horner.horner(3, 5, [8, 9, 10, 11, 12, 13])).toBe(2609);
})
