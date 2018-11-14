var quadradoPerefeito = require("../Algoritmo12");


test("Exigencia de entrada < 1", () => {
    expect(quadradoPerefeito.quadradoPerefeito(0)).toBe(false);
});


test("Verdadeiro caso numero = 4", () => {
    expect(quadradoPerefeito.quadradoPerefeito(4)).toBe(true);
});

test("Verdadeiro caso numero = 16", () => {
    expect(quadradoPerefeito.quadradoPerefeito(16)).toBe(true);
});


test("Verdadeiro caso numero = 400", () => {
    expect(quadradoPerefeito.quadradoPerefeito(400)).toBe(true);
});

test("Verdadeiro caso numero = 1200", () => {
    expect(quadradoPerefeito.quadradoPerefeito(1200)).toBe(false);
});

test("Falso caso numero = 300", () => {
    expect(quadradoPerefeito.quadradoPerefeito(300)).toBe(false);
});
