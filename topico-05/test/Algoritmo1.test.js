
const propriedade3025 = require("../Algoritmo1");
/**Esta função faz o teste da função do Algoritmo1,da propriedade3025
 * @param {propriedade3025(numero)} o teste verifica se a função traz
 * faz uso a propriedade3025.
 */

test("3025 ok", ()=>{
    expect(propriedade3025.propriedade3025(3025)).toBe(true);
});

test("1234", ()=>{
    expect(propriedade3025.propriedade3025(1234)).toBe(false);
});
test("2025 ok", () =>{
    expect(propriedade3025.propriedade3025(2025)).toBe(true);
})
test("9801 ok", () =>{
    expect(propriedade3025.propriedade3025(2025)).toBe(true);
})

test("9802", () =>{
    expect(propriedade3025.propriedade3025(2025)).toBe(false);
})


