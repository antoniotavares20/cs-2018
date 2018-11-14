var crivoEratosten = require("../Algoritmo15");

test("Verficação de condição minima", () => {
    expect(crivoEratosten.crivoEratosten([2, 3, 4], 100)).toBe(false);

});


test("Verficação de condição minima", () => {
    expect(crivoEratosten.crivoEratosten([-2, 3, 4], 100)).toBe(false);

});