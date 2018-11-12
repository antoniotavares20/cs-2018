const valorPI = require("../Algoritmo9");

test("valor menor que 01", ()=>{
    expect(valorPI.tamanho(0)).toBe(0);
})

test("3,1", ()=>{
    expect(valorPI.tamanho(3.1)).toBe(3);
})

test("3,14", ()=>{
    expect(valorPI.tamanho(3.14)).toBe(3);
})

test("3,141", ()=>{
    expect(valorPI.tamanho(3.141)).toBe(3);
})
test("3,1416", ()=>{
    expect(valorPI.tamanho(3.1416)).toBe(3);
})
