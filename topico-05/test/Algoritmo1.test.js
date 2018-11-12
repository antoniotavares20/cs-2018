const propriedade3025 = require("../Algoritmo1");
const propriedade153 = require("../Algoritmo2");

test("3025 ok", ()=>{
    expect(propriedade3025.propriedade3025(3025)).toBe(true);
});

test("1234", ()=>{
    expect(propriedade3025.propriedade3025(1234)).toBe(false);
});
test("2025", () =>{
    expect(propriedade3025.propriedade3025(2025)).toBe(true);
})
test("9801", () =>{
    expect(propriedade3025.propriedade3025(2025)).toBe(true);
})

test("9802", () =>{
    expect(propriedade3025.propriedade3025(2025)).toBe(false);
})


/* Teste da propiedade 153 */
test("153", () =>{
    expect(propriedade153.propriedade153(153)).toBe(true);
})