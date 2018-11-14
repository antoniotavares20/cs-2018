const fibonacci = require('../Algoritmo18');
/**Esta função faz o teste do Algoritmo18
 * 
 */
test("testando paramentro < 1", () => {
    expect(fibonacci.fibonacci(0)).toBe(false);
});

test("testando paramentro N", () => {
    expect(fibonacci.fibonacci(55)).toBe(139583862445);
});

test("testando paramentro N", () => {
    expect(fibonacci.fibonacci(22)).toBe(17711);
});
