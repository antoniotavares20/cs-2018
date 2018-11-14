var raiz = require("../Algoritmo13");



test("É Verdadeiro que é falso caso o valor desejado <1 ", ()=>{
    expect(raiz.raiz(0,5)).toBe(false);
})

test("Raiz de 16 : Precisão de: 5", ()=>{
    expect(raiz.raiz(16,20)).toBe(4);
})

test("Raiz de 25 : Precisão de: 5 ", ()=>{
    expect(raiz.raiz(25,6)).toBe(5);
})


test("Raiz de 81 : Precisão de:7 ", ()=>{
    expect(raiz.raiz(81,200)).toBe(9);
})
test("Raiz de 9 : Precisão de: 3", ()=>{
    expect(raiz.raiz(9,14)).toBe(3);
})
test("Raiz de 36: Precisão de:6 ", ()=>{
    expect(raiz.raiz(36,6)).toBe(6);
})
test("Raiz de : Precisão de: ", ()=>{
    expect(raiz.raiz(4,20)).toBe(2);
})