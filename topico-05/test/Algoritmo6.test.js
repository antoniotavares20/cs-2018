var fatorial = require("../Algoritmo6");

test("2!",()=>{
    expect(fatorial.fatorial(2)).toBe(2);
});

test("3!",()=>{
    expect(fatorial.fatorial(3)).toBe(6);
});
test("4!",()=>{
    expect(fatorial.fatorial(4)).toBe(24);
});
test("5!",()=>{
    expect(fatorial.fatorial(5)).toBe(120);
});
test("6!",()=>{
    expect(fatorial.fatorial(6)).toBe(720);
});
test("7!",()=>{
    expect(fatorial.fatorial(7)).toBe(5040);
});