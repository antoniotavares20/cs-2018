const numberPrime = require("../Algoritmo14");
/**Este teste verifica a função do Algoritmo14 
 * @param {numberPrime(valor)}
 * 
 */


test("Valor minmo > 1", () => {
    expect(numberPrime.numberPrime(0)).toBe(false);
});

test("This number is prime : 2", () => {
    expect(numberPrime.numberPrime(2)).toBe(true);
});

test("This number is prime : 5", () => {
    expect(numberPrime.numberPrime(5)).toBe(true);
});


test("This number is prime : 4", () => {
    expect(numberPrime.numberPrime(4)).toBe(false);
});

test("This number is prime : 9", () => {
    expect(numberPrime.numberPrime(9)).toBe(false);
});

test("This number is prime : 13", () => {
    expect(numberPrime.numberPrime(13)).toBe(true);
});
test("This number is prime : 31", () => {
    expect(numberPrime.numberPrime(13)).toBe(true);
});