var numberPrime = require("../Algoritmo14");

test("Valor minmo > 1", ()=>{
    expect(numberPrime.numberPrime(0)).toBe(false);
});

test("This number is prime : 2", ()=>{
    expect(numberPrime.numberPrime(2)).toBe(true);
});

test("This number is prime : 5", ()=>{
    expect(numberPrime.numberPrime(5)).toBe(true);
});


test("This number is prime : 4", ()=>{
    expect(numberPrime.numberPrime(4)).toBe(false);
});

test("This number is prime : 9", ()=>{
    expect(numberPrime.numberPrime(9)).toBe(false);
});