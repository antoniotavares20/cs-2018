var razaoAurea = require("../Algoritmo11");

test("validacao com sequencia simples", () => {
    expect(razaoAurea.razaoAurea(0, 1, 0)).toBe(false);
})

test("validacao com sequencia simples", () => {
    expect(razaoAurea.razaoAurea(-1, 4, 5)).toBe(false);
})

test("Regras de validacao para y", () => {
    expect(razaoAurea.razaoAurea(20, 4, 2)).toBe(14);
})

test("Regras de validacao proporcao", () => {
    expect(razaoAurea.razaoAurea(15, 11, 22)).toBe(10.181818181818182);
})

test("Regras de validacao proporcao", () => {
    expect(razaoAurea.razaoAurea(3, 2, 7)).toBe(0.7142857142857143);
})

test("validacao com sequencia simplescao", () => {
    expect(razaoAurea.razaoAurea(512, 256, 1024)).toBe(254.75);
})

test("validacao com sequencia simplescao", () => {
    expect(razaoAurea.razaoAurea(25, 5, 225)).toBe(3.1333333333333333);
})

test("validacao com sequencia simplescao", () => {
    expect(razaoAurea.razaoAurea(2, 1, 3)).toBe(0.5);
})