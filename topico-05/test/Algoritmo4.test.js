var restoDaDivisao = require("../Algoritmo4");

test("5%3 é 2 ok", () => {
    expect(restoDaDivisao.restoDaDivisao(5, 3)).toBe(2);
})
test("3%5 é 3 é falso", () => {
    expect(restoDaDivisao.restoDaDivisao(3, 5)).toBe(false);

})

test("8%5 é 3", () => {
    expect(restoDaDivisao.restoDaDivisao(3, 8)).toBe(3);
})
test("Um valor menor e outro maior", () => {
    expect(restoDaDivisao.restoDaDivisao(2, 78)).toBe(false);
})